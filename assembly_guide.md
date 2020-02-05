---
remote_theme: pmarsceill/just-the-docs
title: Assembly Guide
parent: Getting Started
nav_order: 3
has_toc: false
---

# Assembly Guide
This page demonstrates how to assemble the RACECAR-MN Full.

## Before You Begin
### Parts List
Throughout this assembly guide, part names are listed in bold, such as **Jetson Nano** or **4-40 1/4 screw (E)**, and tools are listed in italics, such as *3/16 hex screwdriver* or *wire cutters*.  To help identify these parts and tools you can refer to the [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) page of this website.  We recommend opening the parts list in a separate tab so that you can easily refer to it throughout the assembly.


### Threading and Tapping
Most of the RACECAR-MN is held together with *threads*, which are spirals of metal which lock together to hold something in place.  Specifically, a *threaded rod* (such as a screw) is turned into a *threaded hole* (such as a locknut) until the threads are tightly pressed against each other, holding the rod in place.  Often times, a threaded rod will pass through multiple holes, but *only the last hole should be threaded*; every other hole in between should be larger than the threads of the rod such that the rod can pass through easily. 

In some cases, the threaded hole will come *pre-threaded* (meaning the threads are already cut for us), such as in a locknut or a standoff.  In other cases, the final hole unthreaded but smaller than the threads of the rod.  Then, we can *tap* the hole by turning the rod into the hole, which automatically cuts the correct threads into the hole.  In the RACECAR-MN, you will tap several screws and MF standoffs into the plastic frame.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/threads.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/tapping.png"></td>
  </tr>
  <tr>
    <td>This diagram shows a screw tightened into the pre-threaded hole of a locknut.</td>
    <td>This diagram shows a screw tapped into a plastic plate.</td>
  </tr>
</tbody><table>


### Introducing hardware
The following pieces of hardware are frequently used in the RACECAR-MN.

<img width=100% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/hardware1.png">

<img width=100% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/hardware2.png">


### Tightening Pattern
When two parts are held together with multiple screws, it is important to tighten the screws in multiple steps using a *crisscross pattern*.  This consists of the following steps:
1. Tighten each screw very loosely such that the parts can still move around freely.
2. Select one screw and tighten it gently.
3. Select the screw farthest from the screw chosen in step 2 and tighten it gently.
4. Repeat step 3 for the remaining screws.
5. Repeat the same tightening pattern used in steps 2-4 to tighten all of the screws *again*, this time tightening them to the desired tension.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/screwTighten4.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/screwTighten6.png"></td>
  </tr>
  <tr>
    <td>This diagram shows the order for tightening a pattern of four screws.  Remember to repeat the pattern multiple times.</td>
    <td>This diagram shows the order for tightening a pattern of six screws.  Remember to repeat the pattern multiple times.</td>
  </tr>
</tbody></table>


### Tightness
If we leave a screw or MF standoff too lose, it can wiggle loose and fall off.  If we over-tighten a screw or MF standoff, we can damage the part, strip the screw, or strip the threads.  Especially when we are tapping into plastic, it is very easy to strip off the threads created in the plastic, which prevents the rod from staying in the hole.

Throughout this assembly guide, we specify six levels of screw tightness:
1. *Partial*: Do not tighten the screw all of the way and intentionally leave extra room so the part is free to move.
1. *Very gentle*: Slowly tightening the screw or MF standoff and stop as soon it touches the part.
1. *Gentle*: Slowly tighten the screw until it touches the part, then apply a small amount of pressure to tighten it further. 
1. *Moderate*: Slowly tighten the screw until it touches the part, then apply a moderate amount of pressure to tighten it further.
1. *Tight*: Tighten the screw with a large amount of pressure.
1. *Very tight*: Tighten the screw as much as you can without hurting yourself.

To help avoid stripping a screw, always use the largest screwdriver which fully fits in the head of the screw.


### Safety Precautions
In order to protect the parts of RACECAR-MN during assembly, please take the following two precautions:

* Protective film: The **camera** and the **monitor** come with a layer of protective film covering the lense and screen respectively.  Please leave the protective film on these devices until the car is fully assembled to help protect against any scratches that can occur during assembly.

* Static shock: Have you ever touched a door knob and felt a small shock?  All of printed circuits (namely the **Jetson Nano**, the **Arduino**, the **PWM**, and the **Lidar PCB**) can be damaged if they receive one of these electric shocks.  Thus, before handling any of these pieces, please touch a large piece of metal (such as a metal door handle) to discharge any static electricity in your body.



## 0 - Laser Cutting
Pending



## 1 - Jetson Nano
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **bottom plate**
* **Jetson Nano**
* (4) **4-40 MF standoffs**
* (4) **4-40 1/4 screws (E)**

As a reminder, an MF standoff looks like this.

<img width=15% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/mfStandoff.png">


### 1.1 Attach Standoffs
Screw tightness: *very gentle*

Gently screw four **4-40 MF standoffs** into the four holes shown on the red side of the **bottom plate** using a *3/16 hex screwdriver*.  These holes are toward the back of the car.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/1-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/1-1.jpg"></td>
  </tr>
</tbody></table>


### 1.2 Attach Jetson Nano
**Warning**: *discharge any static before touching the Jetson Nano*\
Screw tightness: *gentle*

Carefully align the four screw holes of the **Jetson Nano** with the **4-40 MF standoffs** attached in the step 1.1.  Make sure that the USB ports of the **Jetson Nano** point toward the back of the **bottom plate**.  Secure the the **Jetson Nano** to the standoffs using four **4-40 1/4 screws**.  Tighten the screws with a *small Philips screwdriver* using a crisscross pattern with multiple stages.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/1-2.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/1-2_Ortho.png"></td>
  </tr>
  <tr>
    <td colspan=2><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/1-2.jpg"></td>
  </tr>
</tbody></table>



## 2 - Camera
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **camera**
* **camera support**
* (1) **1/4 20 1/2 screw (A)**
* (2) **4-40 7/16 screws (D)**

If the **camera** has a blue plastic film, leave this film on until the car is entirely assembled to help protect it from scratches.

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/parts/cameraFilm.jpg">


### 2.1 Expose Micro USB Port
Remove the USB protector on the back right corner of the **camera** by pulling outward as shown in the picture below.  This will expose the USB-C port of the camera.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-1_Partial_Annotated.jpg"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-1_Full.jpg"></td>
  </tr>
  <tr>
    <td>Before removing the USB protector.</td>
    <td>After removing the USB protector.</td>
  </tr>
</tbody></table>


### 2.2 Attach Camera Support Loosely
Screw tightness: *partial*

Attach the **camera support** to the red side of the **bottom plate** with two **4-40 7/16 screws (E)** using a *small Philips screwdriver*.  The red side of the **camera support** should face upwards, and the screws should tap into the **bottom plate** with the head touching the red side of the camera support.  Only partially tighten the screws so that the **camera support** can still jiggle in place.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-2.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-2.jpg"></td>
  </tr>
</tbody></table>


### 2.3 Attach Camera Loosely
**Warning**: *do not remove the protective film covering the camera lens*
Screw tightness: *partial*

Attach the **camera** to the **bottom plate** with a **1/4-20 1/2 screw (A)** using a *large Philips screwdriver*.  The head of the screw should touch the uncolored side of the **bottom plate**, and the rod of the screw should pass through the bottom plate and into the threaded hole on the bottom of the **camera**.  The **camera** should face off the front of the car, away from the **camera support**.  Only partially tighten the screw so that the **camera** can still jiggle in place.

<table width="100%"><tbody>
  <tr>
    <td colspan=2><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-3.png"></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-3_Bottom.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-3_Bottom.jpg"></td>
  </tr>
</tbody></table>


### 2.4 Align and Tighten Camera
Screw tightness: *moderate*

At this point, the **camera** and **camera support** should still jiggle in place.  Align the **camera** so that it is parallel with the front edge of the car and points directly forward.  Carefully hold the **camera** and tighten the **1/4-20 1/4 screw (A)** on the uncolored side of the **bottom plate** to hold it in place.  If the **camera** rotates while you are tightening the screw, you may need to loosen the screw and try again.  

Once the **camera** is secure, press the **camera support** against the back of the camera and tighten the two **4-40 7/16 screws (E)** to hold it in place.  Remember to tighten the two screws in multiple stages.

<img width=100% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-3.jpg">



## 3 - Battery Cradle
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **battery plate**
* **battery ring**
* (6) **4-40 FF standoffs**
* (6) **4-40 5/8 screws (C)**
* (6) **4-40 7/16 screws (D)**

As a reminder, an FF standoff looks like this.

<img width=15% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/ffStandoff.png">


### 3.1 Create Battery Cradle
Screw tightness: *tight*

Place the **battery ring** on top of the red side of the **battery plate** such that the six holes align and the red side of both pieces face upwards.  One at a time, place a **4-40 5/8 screw (C)** through one hole and secure the other side with a **4-40 FF standoff**.  The head of the screw should touch the uncolored sid of the **battery plate**, and the **4-40 FF standoff** should touch the red side of the **battery ring**.  For now, you can simply tighten the standoff by hand.  Repeat this process for all six holes.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/3-2.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/3-2.jpg"></td>
  </tr>
</tbody></table>

Next, tighten the screws using a crisscross pattern with multiple stages.  Hold each standoff in place with a *3/16 hex screwdriver* and tighten the screw with a *small Philips screwdriver*. 

<img width="80%" src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/3-2_Tools.jpg">


### 3.2 Attach Battery Cradle
Screw tightness: *tight*

Align the battery cradle created in step 3.1 with the six holes shown on the **bottom plate**.  The standoffs should touch the uncolored side of the **bottom plate**.  Hold each standoff in place with a **4-40 7/16 screw (D)** (6 total).  Use a *small Philips screwdriver* to tighten the screws in a crisscross pattern with multiple stages.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/3-3.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/3-3_Top.jpg"></td>
  </tr>
</tbody></table>



## 4 - PWM
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **PWM**
* (2) **2-56 MF standoffs**
* (2) **2-56 screws (F)**


### 4.1 Attach Standoffs
Screw tightness: *very gentle*

Use a *3/16 hex screwdriver* to screw two **2-56 MF standoffs** into the two holes shown on uncolored side of the **bottom plate**.  These holes are toward the front of the car but behind the camera.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/4-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/4-1.jpg"></td>
  </tr>
</tbody></table>


### 4.2 Attach PWM
**Warning**: *discharge any static before touching the Jetson Nano*\
Screw tightness: *gentle*

Carefully align the two screw holes of the **PWM** with the **2-56 MF standoffs** attached in step 4.1.  Make sure that the mini USB port of the **PWM** points upward as shown in the pictures below.  Secure the the **PWM** to the standoffs with **2-56 1/4 screws (F)** using a *small Philips screwdriver*.  Remember to tighten the screws in multiple stages.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/4-2.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/4-2_Top.jpg"></td>
  </tr>
</tbody></table>



## 5 - Arduino
**Warning**: *discharge any static before touching the Arduino*

New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **Arduino**
* (4) **4-40 5/8 screws (C)**
* (2) **4-40 7/16 screws (D)**

The **Arduino** plastic base has 6 holes.  Four of the holes go directly through the Arduino and are the correct size to tap 4-40 screws (we will call these the "main holes").  The two holes behind the Arduino are large enough to pass through 4-40 screws (we will call these the "side holes").

<img width=100% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/arduinoHoles.png">


### 5.1 Arduino Main Holes
Screw tightness: *moderate*

Align the **Arduino** with the six holes on the red side of the **bottom plate** such that the micro USB port faces toward the back of the car (away from the camera).  The text "ARDUINO LEONARDO" should face the correct side up as shown in the picture below.

Screw four **4-40 5/8 screws (C)** through the uncolored side of the **bottom plate** such that they tap into the main holes of the Arduino and the head touches the uncolored side of the **bottom plate**.  These screws should pass through the bottom plate without tapping.  Use a *small Philips screwdriver* to tighten the screws in a crisscross pattern with multiple stages.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/5-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/5-1.jpg"></td>
  </tr>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/5-1_Bottom.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/5-1_Bottom.jpg"></td>
  </tr>
</tbody></table>


### 5.2 Arduino Side Holes
Screw tightness: *moderate*

Screw **4-40 7/16 screws (D)** into the two side holes in the Arduino.  These screws should tap into the **bottom plate** and their head should touch the top of the Arduino plastic base.  Notice that these screws are pointing the opposite direction as the screws in step 5.1.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/5-2.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/5-2.jpg"></td>
  </tr>
</tbody></table>



## 6 - Main Standoffs
Screw tightness: *very tight*

New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* (6) **8-32 FF standoffs**
* (6) **8-32 9/16 screws (B)**
* (6) **washers**

First, place a **washer** over each of the six **8-32 9/16 screws (B)** as shown in the picture below.

<img width="80%" src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/6-1.jpg">

Next, identify the six holes around the edge of the **bottom plate** shown in the pictures below.  For each hole, place an **8-32 9/16 screw (B)** with a **washer** through the hole such that the washer and screw head touch the uncolored side of the **bottom plate**.  On the red side of the **bottom plate**, secure the screw with an **8-32 FF standoff**, which you tightening by hand for now.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/6-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/6-1_Bottom.png"></td>
  </tr>
  <tr>
    <td colspan=2><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/6-2.jpg"></td>
  </tr>
</tbody></table>

Next, tighten the six screws using a crisscross pattern with multiple stages.  To tighten a screw, hold the base of the standoff with a *wrench* such that the *wrench* also touches the **bottom plate** as shown in the picture below.  Then, use a *large Philips screwdriver* to tighten the screw from the other side.  On the final stage of your crisscross pattern, tighten the screws as tightly as possible without injuring yourself or stripping the screw.

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/6-2_Tools.jpg">



## 7 - Monitor
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **monitor**
* **monitor support**
* (4) **corner brackets**
* (6) **8-32 9/16 screws (B)**
* (1) **M6x1 8mm screw (G)**
* (4) **locknuts**

Notice that the shorter side of each **corner bracket** has a circular hole and the longer side has a straight slot. 

<img width=60% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/diagrams/cornerBracketAnatomy.png">

If the **monitor** has a clear plastic film, leave this film on until the car is entirely assembled to help protect it from scratches.

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/parts/monitorFilm.jpg">


### 7.1 Create Monitor Support
Screw tightness: *moderate*

Without fully tightening, attach two **corner brackets** to the **monitor support** piece.  Place an **8-32 9/16 screw (B)** through each **corner bracket** slot and tap the screw into one of the side holes in the **monitor support**, such that the head of the screw touches the corner bracket.  Partially tighten each screw with a *large Philips screwdriver*, but leave it loose enough for the **corner brackets** to move freely.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/7-1.jpg"></td>
  </tr>
</tbody></table>

Place the **monitor support** against a flat surface and align the **corner brackets** such that the bottom of the **monitor support** touches the flat surface.  Once you find a good alignment, tighten the screws the rest of the way to keep the **corner brackets** in place. 

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/7-1_Straighten.jpg">


### 7.2 Attach Monitor Support to Frame
Screw tightness: *very tight*

Attach the **monitor support** to the blue side of the **top frame** using the two holes toward the back **top frame**.  Place a **8-32 9/16 screw (B)** through the circular hole in each **corner bracket**, place these screw through the two holes in the **top frame**, and attach a **locknut** to the end of each screw on the uncolored side of the **top plate**.  

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-2_Front.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-2_Ortho.png"></td>
  </tr>
</tbody></table>

To tighten each screw, hold the **locknut** with a *wrench* and tighten the screw with a *large Philips screwdriver* as shown in the picture below.  Be sure to tighten the screws in multiple stages, and in the final stage, tighten the screws as much as possible without hurting yourself.

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/7-2_Tools.jpg">


### 7.3 Attach Monitor to Support
Screw tightness: *tight*

Identify the threaded hole on the bottom of the **monitor**.  Place the **monitor** on the blue side of the **top plate** such that its threaded hole lines up with the slot in the center of the **monitor support**.  Screw a **M6x1 8mm screw (G)** through the **monitor support** into the threaded hole in the **monitor** using a **large Philips screwdriver*.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-3.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/7-3.jpg"></td>
  </tr>
</tbody></table>


### 7.4 Attach Front Corner Brackets
Screw tightness: *very tight*

Identify the two screw holes in front of the monitor on the **top plate**.  Secure the slotted side of a **corner bracket** to the blue side of each hole using an **8-32 9/16 screw (B)** (with the head touching the corner bracket) and a **locknut** on the uncolored side of the hole.  Align the corner bracket against the front of the monitor monitor.  Tighten each screw using the same method shown in step 7.1 by holding the **locknut** with a *wrench* and tightening the screw with a *large Philips screwdriver*.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-4.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/7-4.jpg"></td>
  </tr>
</tbody></table>



## 8 - Lidar PCB
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **Lidar PCB**
* (4) **4-40 standoffs**
* (4) **4-40 1/4 screws (E)**


### 8.1 Attach Standoffs
Screw tightness: *very gentle*

Gently screw four **4-40 MF standoffs** into the four holes shown on the uncolored side of the **top plate** using a *3/16 hex screwdriver*.  These holes are toward the front of the plate.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/8-1_Ortho.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/8-1.jpg"></td>
  </tr>
</tbody></table>


### 8.2 Attach Lidar PCB
**Warning**: *discharge any static before touching the Lidar PCB*\
Screw tightness: *gentle*

Carefully align the four screw holes of the **Lidar PCB** with the **4-40 MF standoffs** attached in step 8.1.  Make sure that the two micro USB ports of the **Lidar PCB** point upward as shown in the picture below.  Secure the the **Lidar PCB** to the standoffs using four **4-40 1/4 screws (E)**.  Tighten the screws with a *small Philips screwdriver* using a crisscross pattern with multiple stages.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/8-2.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/8-2.jpg"></td>
  </tr>
</tbody></table>



## 9 - Lidar
Screw tightness: *gentle*

New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **Lidar**
* (4) **M2.5x0.45 12mm screws (H)**

Align the four legs of the **Lidar** with the with the holes shown on the blue side of the **top plate**, which are toward the front of the car.  Screw a **M2.5x0.45 12mm screw** into each leg (4 total) such that the head of each screw touches the uncolored side of the **top plate**.  Be sure to tighten the screws in multiple stages using a crisscross pattern. 

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/9-1_Top.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/9-1_Bottom.png"></td>
  </tr>
  <tr>
    <td colspan=2 width="80%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/9-1_Front.jpg"></td>
  </tr>
</tbody></table>

Finally, connect the colorful lidar cable from the **lidar PCB** to the **lidar** as shown in the picture below.  The cable should wrap directly around the edge of the **top plate**.

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/9-1_Ortho.jpg">



## 10 - Top Plate
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* (6) **8-32 9/16 screws (B)**
* (6) **washers**


### 10.1 Remove Monitor
Remove the **monitor** by unscrewing the **M6x1 8mm screw (G)** used in step 7.3.  This is necessary because the **monitor** blocks two of the screw holes needed in step 10.2.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/10-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/10-1.jpg"></td>
  </tr>
</tbody></table>


### 10.2 Attach Top Plate
Screw tightness: *very tight*

On the **top plate**, you will find the same pattern of six holes used in step 6.  Align these holes with the **8-32 FF standoffs** attached to the **bottom plate**.  Secure each hole with a **washer** and an **8-32 9/16 screw (B)** such that the washer and screw head are on the blue side of the **top plate**.  Tighten the screws in multiple stages using a crisscross pattern with a *large philips screwdriver*.  Since the standoff is already held in place on the **bottom plate**, you do not need to use a *wrench*.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/10-2.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/10-2.jpg"></td>
  </tr>
</tbody></table>


### 10.3 Reattach Monitor
Reattach the **monitor** by repeating step 7.3.  

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/10-3.png">



## 11 - Breadboard
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **breadboard**

Remove the yellow wax paper from the back of the **breadboard** to reveal the sticky foam tape.  

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/11-1.jpg">

Carefully align the **breadboard** with the very front of the blue side of the **top plate**.  Firmly press the breadboard while supporting the **top plate** from underneath to secure the tape.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/11-1_Top.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/11-1_Ortho.png"></td>
  </tr>
</tbody></table>



## 12 - USB Hubs
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* (2) **USB hubs**
* **foam tape**


### 12.1 Apply Foam Tape
Cut one piece of **foam tape** approximately 3.5 inches long and attach the sticky side to the middle of a **USB hub** by firmly pressing the **foam tape**.  Be sure to place the tape on the bottom of the **USB hub**, which is the side that does not say "Anker".  Finally, remove the wax paper from the **foam tape** to expose the other sticky side.

Repeat this process for a second **USB hub**.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/12-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/12-1.jpg"></td>
  </tr>
</tbody></table>


### 12.2 Attach Bottom USB Hub
On the uncolored side of the **bottom plate**, attach the first **USB hub** toward the back of the car with the USB ports pointing toward the battery cradle.  Make sure that the front edge of the **USB hub** is roughly in line with the middle of the square holes as shown in the pictures below.  Firmly press the **USB hub** to secure the **foam tape**.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/12-2_Ortho.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/12-2.jpg"></td>
  </tr>
</tbody></table>


### 12.3 Attach Top USB Hub
On the uncolored side of the **top plate**, attach the second **USB hub** to the very back of the car with the USB ports pointing out of the back of the car, as shown in the pictures below.  Notice that the USB ports are pointing the opposite direction as in step 12.2 and the same direction as the ports of the **Jetson Nano**.  Firmly press the **USB hub** while supporting the other side of the **top plate** to secure the **foam tape**.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/12-3.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/12-3.jpg"></td>
  </tr>
</tbody></table>



## 13 - Speaker
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **speaker**
* **foam tape**


### 13.1 Apply Foam Tape
Cut one piece of **foam tape** approximately 2.5 inches long and attach it to the middle of the **speaker** by firmly pressing the **foam tape**.  Be sure to place the tape on the bottom of the **speaker** (the side with the two light gray pieces of rubber).  Finally, remove the wax paper from the **foam tape** to expose the other sticky side.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/13-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/13-1.jpg"></td>
  </tr>
</tbody></table>


### 13.2 Attach Speaker
On the blue side of the **top plate**, attach the speaker to the very back of the car, directly above the **USB hub** attached in step 12.3.  The speaker should point toward the back of the car, with the speaker cable pointing toward the front of the car.  Firmly press the **speaker** while supporting the other side of the **top plate** to secure the **foam tape**.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/13-2_Back.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/13-2.jpg"></td>
  </tr>
  <tr>
    <td colspan=2 width="80%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/13-2_Top.png"></td>
  </tr>
</tbody></table>



## 14 - Battery
New parts used in this step (see [parts list](https://matthewcalligaro.github.io/RacecarWebsite/parts_list.html) for details):
* **battery**

Slide the battery into the battery cradle as shown in the picture below.  Be sure that the USB ports of the battery face to the right side of the car, which is the same side as the micro USB port on the **Jetson nano**.

<img width=80% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/14-1.png">
