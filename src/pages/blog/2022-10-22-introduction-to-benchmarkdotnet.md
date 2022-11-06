---
templateKey: 'blog-post'
title: 'Introduction to BenchmarkDotNet'
date: 2022-10-22T18:24:10.000Z
author: Jimmy Boinembalome
authorimage: /img/jimmy.jpg
category: C#
categorycolor: bg-purple-100 text-purple-800
featuredpost: true
featuredauthor: Wimber Cancho
featuredlink: https://unsplash.com/@billcy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopy
featuredimage: /img/introduction-to-benchmarkdotnet.jpg
description: >-
  Let's discover the BenchmarkDotNet package for tracking performance and sharing reproducible measurement experiments.
tags:
  - Development
  - C#
  - Benchmark
---
  
Benchmarking is a process used to evaluate performance measures. We can take advantage of benchmarking to compare performance between different methods or libraries and determine which areas of our code can be optimized. 

In this article, we will create a benchmark in **C#** with the **BenchmarkDotNet** package and 
compare the performance between 3 ways to retrieve a element by id in a object list:
- A `foreach` loop.
- The `FirstOrDefault()` extension. (Linq)
- The `SingleOrDefault()` extension. (Linq)

## Prerequisites
Before to start with **BenchmarkDotNet** you will need:
- [Visual Studio Code](https://code.visualstudio.com/) with the [C# extension](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp).
- The [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0).

> **_Note:_**  Of course, you can develop with your favourite IDE as well. 🙂

## BenchmarkDotNet
**BenchmarkDotNet** is an open source library that can quickly transform our methods into benchmarks. **BenchmarkDotNet** does most of the analysis of performance data for us and presents the results in a user-friendly format. In addition to being extremely powerful, **BenchmarkDotNet** is compatible with applications using the **.NET** and **.NET Core** frameworks.

Now we will install **BenchmarkDotNet**.

## Create a new project
1. Create a new folder named **IntroductionToBenchmarkDotNet**.
2. Open the created folder with **Visual Studio Code**.
3. Open a new **Terminal** in **Visual Studio Code**.
4. In the **Terminal**, run the following command to create a new **Console App** with **.Net 6**:
```powershell
dotnet new console --framework net6.0
```
5. Install the **BenchmarkDotNet** package with the following command:
```powershell
dotnet add package BenchmarkDotNet --version 0.13.2
```
6. Use the following command to **run** the app:
```powershell
dotnet run
```

If all the steps were successful, you should see on your terminal our fabulous:
```powershell:clipboard=false
Hello, World!
```

Now that we have successfully created our project and installed the BenchmarkDotNet package, we can create our first benchmark.

## Create a benchmark 
### Add a new folder
In the project created earlier, we will add a new folder named **Benchmarks**. This folder will be used to create each benchmark.

For example, if we want to compare the performance between `string.format()` and the [interpolation string](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/interpolated) to concatenate several strings, we can create a new class named `ConcatStringBenchmark`, if we want to know the best performance between `AutoMapper` and `Mapster` then we can create a `MapperBenchmark` class.

### Add a benchmark class
As we want to evaluate the performance of 3 ways to get an element by its id, we will add a `Person` object which will contain the properties `Id` and `Name` and a new class called `GetByIdBenchmark` with a list of people.
```csharp
namespace IntroductionToBenchmarkDotNet.Models 
{
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
    }
}
```

```csharp
using IntroductionToBenchmarkDotNet.Models;

namespace IntroductionToBenchmarkDotNet.Benchmarks
{
    public class GetByIdBenchmark
    {
        readonly List<Person> people = new();
        readonly int id = 1;

        public GetByIdBenchmark()
        {
            for (int i = 1; i <= 100; i++)
            {
                var person = new Person
                { 
                  Id = i, 
                  Name = $"Name{i}" 
                };

                people.Add(person);
            }
        }    
    }
}
```

### Add the methods to compare
Now, let's add the 3 ways to get an element by id inside the `GetByIdBenchmark` class.

- Foreach:
```csharp
public Person? Foreach()
{
    foreach (var person in people)
    {
        if (person.Id == id) 
            return person;
    }

    return null;
}
```

- FirstOrDefault:
```csharp
public Person? FirstOrDefault() 
    => people.FirstOrDefault(x => x.Id == id);
```

- SingleOrDefault:
```csharp
public Person? SingleOrDefault() 
    => people.SingleOrDefault(x => x.Id == id);
```

### Add Benchmark attribut
To target the methods to be executed, we only need to insert the [Benchmark] attribute above the methods as below:
```csharp
[Benchmark]
public Person? Foreach()
{
    foreach (var person in people)
    {
        if (person.Id == id)
            return person;
    }

    return null;
}

[Benchmark]
public Person? FirstOrDefault()
    => people.FirstOrDefault(x => x.Id == id);

[Benchmark]
public Person? SingleOrDefault()
    => people.SingleOrDefault(x => x.Id == id);
```
Okay ça semble plutôt bien, cependant 
### Use Global Setup and Cleanup
- Global Setup and Cleanup
[GlobalSetup]
[GlobalCleanup]

### Execute a benchmark with several parameters
[Params(10, 100, 1000)]
public int NumberOfIterations { get; set; }

### Execute a benchmark with different parameters
[Benchmark]
[Arguments(100, 10)]
 public void Benchmark(int a, int b)

## Run the Benchmark 

- Update the **Program.cs** file to Run the `LinqBenchmark`:
```csharp
using BenchmarkDotNet.Running;
using IntroductionToBenchmarkDotNet.Benchmarks;

var summary = BenchmarkRunner.Run<GetByIdBenchmark>();
```
- Start the console app in Release mode:
```powershell
dotnet run -c Release
```

> **_Note:_**  `-c` or `--configuration`, définit la configuration de build. La valeur par défaut est Debug. Dans ce cadre d'un benchmark nous utilisons le mode Release pour améliorer le temps d'exécution du benchmark qui peut s'éxécuter 10 à 100 fois plus lentement en mode Debug.


Add the Result of the benchmark
Comment the benchmark

## Bonus
- Execute the Benchmark on several frameworks
<TargetFrameworks>net6.0;net48;net472</TargetFrameworks>
<ImplicitUsings>disable</ImplicitUsings>
<Nullable>disable</Nullable>
[SimpleJob(RuntimeMoniker.Net60)]
[SimpleJob(RuntimeMoniker.Net48)]
[SimpleJob(RuntimeMoniker.Net472)]


## Conclusion

BenchmarkDotNet est très utilisé par la communauté. Plus de 11 000 projets utilisent BenchmarkDotNet, notamment dotnet/performance (benchmarks de référence pour tous les runtimes .NET), dotnet/runtime (runtime et bibliothèques .NET), Roslyn (compilateur C# et Visual Basic), ASP.NET Core, Entity Framework Core, Serilog, Avalonia, RestSharp, MediatR et bien d'autres.

Learn more about benchmarking (doc link, book link)
*Thanks for reading! 🙂*