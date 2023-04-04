---
layout: post
author: justin
title:  "back to Jekyll!"
date:   2023-04-03 18:13:57 -0500
tags: jekyll update wsl windows11
summary: We go around and around but sometimes you gotta get off the ride and pay
---
## Just another flip flop
So I'm back to Jekyll because I wanted to get some forward progress on actually creating a useful site for both myself professionally and for others looking for solutions to common problems. 

## Ran into some issues with WSL
If you're on windows 11 don't assume that ~/.bashrc is the right file to edit for the default Ubuntu bash setup. You want to edit ~/.profile changing ~/.bashrc will cause WSL's Ubuntu to hard crash when launching. 