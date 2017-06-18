---
layout: post
title:  "WPF已死？-- No!"
date:   2015-03-23 23:09:00
categories: .net
author: John
tags : [WPF]
---

> 本文译自[Greg Levenhagen](http://greglevenhagen.com/about-me/ "Greg Levenhagen")的一篇博客，原文地址[Is WPF Dead? – NO!](http://greglevenhagen.com/is-wpf-dead-no/ "Is WPF Dead? – NO!")

<!-- more -->

Greg是微软客户端开发方面的MVP，也是Skyline公司的高级软件工程顾问。他经常被问到关于WPF的未来，WPF是否已死？让我们来看几条开发者表示担忧的理由：（没有特定顺序）

 - 微软推出基于Windows Modern UI（以前叫Metro UI）和WinRT的应用；
 - WPF官方团队在MSDN上的博客（[http://blogs.msdn.com/b/wpf/](http://blogs.msdn.com/b/wpf/)）停止更新已经超过3年；
 - StackOverflow上很多讨论：[http://stackoverflow.com/questions/21035019/is-wpf-suitable-for-line-of-business-software](http://stackoverflow.com/questions/21035019/is-wpf-suitable-for-line-of-business-software)
 - Rocky Lhotka写了一篇博客：[http://www.lhotka.net/weblog/WinRTAsTheNewSilverlightAndWPF.aspx](http://www.lhotka.net/weblog/WinRTAsTheNewSilverlightAndWPF.aspx)
 - Andrew Brust的博客论述：[http://visualstudiomagazine.com/articles/2014/02/11/satya-nadellas-to-do-list.aspx](http://visualstudiomagazine.com/articles/2014/02/11/satya-nadellas-to-do-list.aspx)
 - 除上述几条，一定还有不少关于WPF未来的担忧。


几点说明WPF未死的理由：

 - Greg刚刚参加了一个有微软参加的会议，他得到的信息是微软正在准备下一个版本的WPF。虽然不能透露更多的细节，但事实上微软仍在收集有关WPF的反馈和活动；
 - 如果你想提交反馈，请戳[https://dotnet.uservoice.com/forums/40583-wpf-feature-suggestions](https://dotnet.uservoice.com/forums/40583-wpf-feature-suggestions)
 - 在去年的BUILD会议的讲台上，WPF得到了时间和一席之地，表明了微软的态度；
 - .NET 4.5推出了WPF的新特性。[http://msdn.microsoft.com/en-us/library/bb613588(v=vs.110).aspx](http://msdn.microsoft.com/en-us/library/bb613588%28v=vs.110%29.aspx)

<!-- more -->

对于还在犹豫是否应该使用WPF来构建业务支撑系统的企业而言，WPF其实是一种非常好的技术。我不能预测更宏观的问题，比如说未来客户端技术的发展方向。但我确切知道，WPF还没有死，她还在继续维护改进中。然而，移动领域仍然会持续增长。我看过不少Windows Store, Windows Phone, WPF, iOS, Andorid等平台的App案例，他们是如何创造商业价值，以及他们怎样与终端用户联系在一起。

Windows Store App可以用来构建业务支撑系统吗？当然可以。我自己也曾做过几个。我认为要想使用WRT做好业务系统，我们需要在设计思维方面作出一些改变。这也许意味着要把你的企业级应用拆解成一系列的应用。可以确信WPF更适合这样的场景，因为她拥有更强大的特征。但也不能仅仅是因为业务系统就放弃WinRT这套解决方案，任何应用程序我们都会去讨论她的商业价值，技术的决策应该是要去帮忙实现其价值。

很多开发者去学习Windows Store, WPF, Windows Phone or Silverlight等平台，这当然没问题。但我认为一个开发者更应该熟知XAML，而非特定的某一个平台。因为XAML是跨不同平台的公共语言，你的技能可以在这些平台之间自由切换。
