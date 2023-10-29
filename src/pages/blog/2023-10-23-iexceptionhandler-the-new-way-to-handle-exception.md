---
templateKey: 'blog-post'
title: 'IExceptionHandler: The new way to handle exceptions in ASP.NET Core 8'
date: 2023-10-23T18:24:10.000Z
author: Jimmy Boinembalome
authorimage: /img/jimmy.jpg
category: C#
categorycolor: bg-purple-100 text-purple-800
featuredpost: true
featuredauthor: Jake Weirick
featuredlink: https://unsplash.com/fr/@weirick?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash
featuredimage: /img/iexceptionhandler-the-new-way-to-handle-exception.jpg
description: >-
  Discover how the handle exceptions with IExceptionHandler in ASP.NET Core 8.
tags:
  - Development
  - C#
  - ASP.NET Core 8
  - .NET 8
---
  
Managing exceptions effectively is important for the stability and reliability of an application. ASP.NET Core 8 will introduce a new way to manage global exceptions with the `IExceptionHandler` interface.

In this article, we will explore what `IExceptionHandler` is and how to implement it.

## What is IExceptionHandler?
`IExceptionHandler` is a new interface that gives us a callback for handling known exceptions during the processing of HTTP requests.


## Create a default handler
```csharp
internal sealed class DefaultExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        httpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;

        await httpContext.Response.WriteAsJsonAsync(new ProblemDetails
        {
            Status = StatusCodes.Status500InternalServerError,
            Title = "An error occurred while processing your request.",
            Type = "https://tools.ietf.org/html/rfc7231#section-6.6.1"
        }, cancellationToken);

        return true;
    }
}
```

## Create a not found handler
```csharp
internal sealed class NotFoundExceptionHandler : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        if (exception is not NotFoundException notFoundException)
        { 
            return false;
        }

        httpContext.Response.StatusCode = StatusCodes.Status404NotFound;

        await httpContext.Response.WriteAsJsonAsync(new ProblemDetails()
        {
            Status = StatusCodes.Status404NotFound,
            Type = "https://tools.ietf.org/html/rfc7231#section-6.5.4",
            Title = "The specified resource was not found.",
            Detail = notFoundException.Message
        }, cancellationToken);

        return true;
    }
}
```

Adds an `IExceptionHandler` implementation to services. `IExceptionHandler` implementations are used by the exception handler middleware to handle unexpected request exceptions.
Multiple handlers can be added and they're called by the middleware in the order they're added.

```csharp
builder.Services
    .AddExceptionHandler<NotFoundExceptionHandler>()
    .AddExceptionHandler<DefaultExceptionHandler>();

app.UseExceptionHandler(options => { });
```
## Conclusion


Source code of the article: [Github source code](https://github.com/jboinembalome/IntroductionToIExceptionHandler)

*Thanks for reading! 🙂*