---
remote_theme: pmarsceill/just-the-docs
title: Assembly Guide
parent: Getting Started
nav_order: 3
has_toc: false
---

# Assembly Guide
This page will walk you through how to assembly the RACECAR-MN. 

## Before You Begin
### Parts list
Throughout this assembly guide, part names are listed in bold, such as **Jetson Nano** or **4-40 1/4 screw**.  To help identify these parts, you can refer to the parts list page of this website.  We recommend opening the parts list in a separate browser page so that you can easily refer to it during the assembly.

### Screws 
Most of the RACECAR-MN is assembled using screws.  A screw has *threads*, which are spirals of metal which allow you to tighten the screw by turning it and hold it in place once it is tight.

Throughout this assembly guide, we will specify six levels of screw tightness:
1. *partial*: Do not tighten the screw all of the way, and intentionally leave extra room so the part is free to move.
1. *very gentle*: Slowly tightening the screw or MF standoff and stop as soon it touches the part.
1. *gentle*: Slowly tighten the screw until it touches the part, then apply a small amount of pressure to tighten it further. 
1. *moderate*: Slowly tighten the screw until it touches the part, then apply a moderate amount of pressure to tighten it further.
1. *tight*: Tighten the screw with a large amount of pressure.
1. *very tight*: Tighten the screw as tight as you can without hurting yourself.  Be careful to use the correct sized screw driver to avoid slipping out of the screw.

### Safety Precautions
In order to protect the parts of RACECAR-MN during assembly, please take the following two precautions:

* Protective film: The **camera** and the **monitor** come with a layer of protective film covering the lense and screen respectively.  Please leave the protective film on these devices until the car is fully assembled to help protect against any scratches that can occur during assembly.
* Static shock: Have you ever touched a door knob and felt a small shock?  All of printed circuits (namely the **Jetson Nano**, the **Arduino**, the **PWM**, and the **Lidar PCB**) can be damaged if they receive one of these electric shocks.  Thus, before handling any of these pieces, please touch a large piece of metal (such as a metal door handle) to discharge any static electricity in your body.

## 0 - Laser cutting
Pending


## 1 - Jetson Nano
### 1.1 Attach standoffs
Screw tightness: *very gentle*

Gently screw four **4-40 MF standoffs** into the four holes shown on the red side of the **bottom plate**.  These holes are toward the back of the car.

<table width="100%"><tbody><tr>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/1-1.png"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/1-1.HEIC"></td>
</tr></tbody></table>

### 1.2 Attach Jetson Nano
Warning: *discharge any static before touching the Jetson Nano*
Screw tightness: *gentle*

Carefully line the four screw holes of the **Jetson Nano** up with **4-40 MF standoffs** attached in the previous step.  Make sure that the USB ports of the **Jetson Nano** towards the back of the **bottom plate**.  Secure the the **Jetson Nano** to the standoffs using four **4-40 1/4 screws**.  Tighten the screws using a criss-cross pattern.

<table width="100%"><tbody><tr>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/1-2.png"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/1-2_Ortho.HEIC"></td>
</tr></tbody></table>

## 2 - Camera
### 2.1 Attach camera support loosely
Screw tightness: *partial*

Attach the **camera support** to red side of the **bottom plate** using two **4-40 7/16 screws**.  The red side of the **camera support** should face upwards.  Only partially tighten the screws so that the **camera support** can still jiggle in place.

<table width="100%"><tbody><tr>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-1.png"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-1.HEIC"></td>
</tr></tbody></table>

### 2.2 Attach camera loosely
Warning: *do not remove the protective film covering the camera lens*
Screw tightness: *partial*

Attach the **camera** to the **bottom plate** using one **1/4-20 1/4 screw**.  The screw should pass through the **bottom plate** and thread into the hole in the bottom of the **camera**.  The **camera** should face off the front of the car, away from the **camera support**.  Only partially tighten the screw so that the **camera** can still jiggle in place.

<table width="100%"><tbody>
<tr>
  <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-2.png"></td>
  <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-2.HEIC"></td>
</tr>
<tr>
  <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-2_Bottom.png"></td>
  <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-2_Bottom.HEIC"></td>
</tr>
</tbody></table>

### 2.3 Align and tighten
Screw tightness: *moderate*

At this point, the **camera** and **camera support** should still be able to jiggle in place.  Carefully align the **camera** so that it is parallel with the front edge of the car and points directly forward.  Carefully hold the **camera** and tighten the **1/4-20 1/4 screw** to hold it in place.  If the **camera** rotates while you are tightening the screw, you may need to loosen the screw and try again.  

Once the **camera** is secure, press the **camera support** against the back of the camera and tighten the two **4-40 7/16 screws** to hold it in place.  Tighten the screws using a cross-cross pattern. 

## 3 - Battery cradle
### 3.1 Prepare battery cradle
Place the **battery ring** on top of red side of the **battery plate** such that the red side of both pieces face upwards.  Line up the holes in both pieces, and place six **4-40 5/8 screws** through the holes.  The screws should pass through these holes without threading, so there is nothing to hold them in place yet.

<table width="100%"><tbody><tr>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/3-1.png"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/3-1_Bottom.png"></td>
</tr></tbody></table>

## 3.2 Create battery cradle
Screw tightness: *tight*

### 3.3 Attach battery cradle
Screw tightness: *tight*

## 4 - PWM
## 4.1 Attach standoffs
Screw tightness: *very gentle*

Gently screw two **2-56 MF standoffs** into the two holes shown on uncolored side of the **bottom plate**.  These holes are toward the front of the car but behind the camera.

<table width="100%"><tbody><tr>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/3-1.png"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-1.HEIC"></td>
</tr></tbody></table>

## 7 - Monitor
On each corner bracket, notice that one side has a circular hole and one side has a straight slot.


### 7.1 Create Monitor Support
Screw tightness: *moderate*

Attach two **corner brackets** to the **monitor support** piece.  For each corner bracket, place an **8-32 screw** through the straight slot and tap the screw into one of the side holes in the monitor support.

<table width="100%"><tbody><tr>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-1.png"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/extra/7-1.jpg"></td>
</tr></tbody></table>
  
### 7.2 Attach Monitor Support to Frame
Screw tightness: *very tight*

Attach the **monitor support** to the **top frame** using the two holes in the rear.  Place an **8-32 screw** through the circular hole in each corner bracket, place this screw through the hole in the top frame, and attach a **#8 locknut** to the end of the screw on the bottom side of the top plate.  

<img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/extra/7-2.jpg" width="60%">

<table width="100%"><tbody><tr><td><img src= "https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-2_Ortho.png"></td><td><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/extra/7-2.jpg"></td></tr></tbody></table>

To tighten each screw, secure the locknut with a wrench and tighten the screw with a screw driver.


### 7.3 Attach Monitor to Support

<img src= "https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-3.png" width="50%" height="50%">

<img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/extra/7-3.jpg" width="50%" height="50%">


