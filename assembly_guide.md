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
Throughout this assembly guide, part names are listed in bold, such as **Jetson Nano** or **4-40 1/4 screw**, and tools are listed in italics, such as *3/16 hex screwdriver* or *wire cutters*.  To help identify these parts and tools you can refer to the parts list page of this website.  We recommend opening the parts list in a separate tab so that you can easily refer to it throughout the assembly.

### Screws 
Most of the RACECAR-MN is assembled using screws.  A screw is a type of fastener which is held in place with *threads*, which are spirals of metal.  When a screw is turned into a threaded hole, the threads of the screw line up with the threads of the hole, which hold the screw tightly in place.

Often times, a screw will pass through multiple holes, but *only the last hole should be threaded*.  Every hole between the head of the screw and the final hole should be larger than the threads of the screw so that the screw can pass through easily.  In some cases, the threaded hole will come pre-threaded (such as the hole in a locknut or a standoff).  In other cases, the final hole is smaller than the screw but does not have any threads.  In this case, we can *tap* the screw into the hole by turning the screw into the hole to cut threads automatically.  We will tap screws into several of the holes cut in the plastic frame.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/diagrams/screwAnatomy.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/diagrams/screwTap.png"></td>
  </tr>
  <tr>
    <td>This diagram identifies the head and threads of a screw.</td>
    <td>This diagram shows how to attach the red plate to the blue plate by tapping the screw into the blue plate.</td>
  </tr>
</tbody></table>

#### Tightening Pattern
When two parts are held together with multiple screws, it is important to tighten the screws in multiple steps using a *criss-cross pattern*.  This consists of the following steps:
1. Tighten each screw very loosely such that the parts can still move around freely.
2. Select one screw and tighten it gently.
3. Select the screw farthest from the screw chosen in step 2 and tighten it gently.
4. Repeat step 3 for the remaining screws.
5. Repeat the same tightening pattern used in steps 2-4 to tighten all of the screws *again*, this time tightening them to the desired tension.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/diagrams/screwTighten4.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/diagrams/screwTighten6.png"></td>
  </tr>
  <tr>
    <td>This diagram shows the order for tightening a pattern of four screws.  Remember to repeat the pattern multiple times.</td>
    <td>This diagram shows the order for tightening a pattern of six screws.  Remember to repeat the pattern multiple times.</td>
  </tr>
</tbody></table>

#### Screw Tightness
If we leave a screw too lose, it can wiggle loose and eventually fall off.  If we over tighten a screw, we can damage the part, strip the screw, or strip the threads.  Especially when we are tapping the screw into plastic, it is very easy to strip off the threads we create in the plastic, which prevents the screw from being able to stay in the hole.

Throughout this assembly guide, we specify six levels of screw tightness:
1. *partial*: Do not tighten the screw all of the way, and intentionally leave extra room so the part is free to move.
1. *very gentle*: Slowly tightening the screw or MF standoff and stop as soon it touches the part.
1. *gentle*: Slowly tighten the screw until it touches the part, then apply a small amount of pressure to tighten it further. 
1. *moderate*: Slowly tighten the screw until it touches the part, then apply a moderate amount of pressure to tighten it further.
1. *tight*: Tighten the screw with a large amount of pressure.
1. *very tight*: Tighten the screw as tight as you can without hurting yourself.

To help avoid stripping a screw, always use the largest screw driver which fully fits in the head of the screw.

### Safety Precautions
In order to protect the parts of RACECAR-MN during assembly, please take the following two precautions:

* Protective film: The **camera** and the **monitor** come with a layer of protective film covering the lense and screen respectively.  Please leave the protective film on these devices until the car is fully assembled to help protect against any scratches that can occur during assembly.

* Static shock: Have you ever touched a door knob and felt a small shock?  All of printed circuits (namely the **Jetson Nano**, the **Arduino**, the **PWM**, and the **Lidar PCB**) can be damaged if they receive one of these electric shocks.  Thus, before handling any of these pieces, please touch a large piece of metal (such as a metal door handle) to discharge any static electricity in your body.

## 0 - Laser Cutting
Pending


## 1 - Jetson Nano
### 1.1 Attach Standoffs
Screw tightness: *very gentle*

Gently screw four **4-40 MF standoffs** into the four holes shown on the red side of the **bottom plate** using the *3/16 hex screwdriver*.  These holes are toward the back of the car.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/1-1.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/1-1.jpg"></td>
  </tr>
</tbody></table>

### 1.2 Attach Jetson Nano
Warning: *discharge any static before touching the Jetson Nano*\
Screw tightness: *gentle*

Carefully align the four screw holes of the **Jetson Nano** with the **4-40 MF standoffs** attached in the step 1.1.  Make sure that the USB ports of the **Jetson Nano** point toward the back of the **bottom plate**.  Secure the the **Jetson Nano** to the standoffs using four **4-40 1/4 screws**.  Tighten the screws using a criss-cross pattern.

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
### 2.1 Expose Micro USB Port
Remove the USB protector on the back right corner of the **camera**, which will expose the USB-C port.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-1_Partial.jpg"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-1_Full.jpg_"></td>
  </tr>
  <tr>
    <td>Before removing the USB protector.</td>
    <td>After removing the USB protector.</td>
  </tr>
</tbody></table>

### 2.2 Attach Camera Support Loosely
Screw tightness: *partial*

Attach the **camera support** to red side of the **bottom plate** using two **4-40 7/16 screws**.  The red side of the **camera support** should face upwards.  Only partially tighten the screws so that the **camera support** can still jiggle in place.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-2.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-2.jpg"></td>
  </tr>
</tbody></table>

### 2.3 Attach Camera Loosely
Warning: *do not remove the protective film covering the camera lens*
Screw tightness: *partial*

Attach the **camera** to the **bottom plate** using one **1/4-20 1/4 screw**.  The screw should pass through the **bottom plate** and thread into the hole in the bottom of the **camera**.  The **camera** should face off the front of the car, away from the **camera support**.  Only partially tighten the screw so that the **camera** can still jiggle in place.

<table width="100%"><tbody>
  <tr>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-3_Bottom.png"></td>
    <td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-3_Bottom.jpg"></td>
  </tr>
  <tr>
    <td colspan=2><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/2-3.png"></td>
  </tr>
</tbody></table>

### 2.4 Align and Tighten Camera
Screw tightness: *moderate*

At this point, the **camera** and **camera support** should still be able to jiggle in place.  Carefully align the **camera** so that it is parallel with the front edge of the car and points directly forward.  Carefully hold the **camera** and tighten the **1/4-20 1/4 screw** to hold it in place.  If the **camera** rotates while you are tightening the screw, you may need to loosen the screw and try again.  

Once the **camera** is secure, press the **camera support** against the back of the camera and tighten the two **4-40 7/16 screws** to hold it in place.  Remember to tighten the two screws in multiple stages.

<img width=100% src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/2-3.jpg">

## 3 - Battery Cradle
### 3.1 Prepare Battery Cradle
Place the **battery ring** on top of the red side of the **battery plate** such that the red side of both pieces face upwards.  Line up the holes in both pieces, and place six **4-40 5/8 screws** through the holes.  The screws should pass through these holes without threading, so there is nothing to hold them in place yet.

<table width="100%"><tbody><tr>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/3-1.png"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/3-1_Bottom.png"></td>
</tr></tbody></table>

## 3.2 Create Battery Cradle
Screw tightness: *tight*

Screw a **4-40 FF standoff** on each of the screws from step 3.1 (6 total).  Begin by tightening the standoffs by hand.  Then, tighten the screws using a criss-cross pattern, holding each standoff in place with a *3/16 hex screwdriver* and tightening the screw with a *small Philips screwdriver*. 

### 3.3 Attach Battery Cradle
Screw tightness: *tight*

Align the six standoffs from step 3.2 with the holes shown on the **bottom plate**.  Be sure that the standoffs touch the uncolored side of the **bottom plate**.  Hold each standoff in place with a **4-40 7/16 screw** (6 total).  Tighten the screws in a criss-cross pattern using a *small Philips screwdriver*. 

## 4 - PWM
### 4.1 Attach Standoffs
Screw tightness: *very gentle*

Gently screw two **2-56 MF standoffs** into the two holes shown on uncolored side of the **bottom plate**.  These holes are toward the front of the car but behind the camera.

### 4.2 Attach PWM
Warning: *discharge any static before touching the Jetson Nano*\
Screw tightness: *gentle*

Carefully align the two screw holes of the **PWM** with the **2-56 MF standoffs** attached in step 4.1.  Make sure that the mini USB port of the **PWM** points upward, as shown in the pictures.  Secure the the **PWM** to the standoffs using two **2-56 1/4 screws**.  Remember to tighten the screws in multiple stages.

## 5 - Arduino
Warning: *discharge any static before touching the Arduino*

The **Arduino** plastic base has 6 holes.  Four of the holes go directly through the Arduino, and are the correct size to tap 4-40 screws (we will call these the "main holes").  The two holes behind the Arduino are large enough to pass through 4-40 screws, so we will tap these screws into the plastic directly.  

### 5.1 Arduino Main Holes
Screw tightness: *moderate*

Align the **Arduino** with the six holes on the red side of the **bottom plate**.  Screw four **4-40 5/8 screws** through the uncolored side of the **bottom plate** such that the tap into the main holes of the Arduino and the head touches the uncolored side of the **bottom plate**.  These screws should pass through the bottom plate without tapping.  Remember to tighten the screws in a criss-cross pattern in multiple stages.

### 5.2 Arduino Side Holes
Screw tightness: *moderate*

Screw **4-40 7/16 screws** into the two remaining holes in the Arduino.  These screws should tap into the **bottom plate**, and their head should touch the top of the Arduino plastic base.  Notice that these screws are pointing the opposite direction as the screws in part 5.2.

## 6 - Main Standoffs
Screw tightness: *very tight*

First, gather six **8-32 9-16 screws** and place a **washer** over each one, as shown.

Next, identify the six 8-32 screw holes around the edges of the **bottom plate**, as shown in the pictures below.  For each hole, place an **8-32 9/16 screw** with **washer** through the hole such that the washer and screw head are on the uncolored side of the **bottom plate**.  On the red side of the **bottom plate**, secure the screw with an **8-32 FF standoff**, which you can begin by tightening by hand.  Then, tighten the screw as tight as possible by holding the standoff with a *wrench* and tightening the screw with a *large Philips screwdriver*.  Be sure to steady the wrench against the **bottom plate**, as shown in the picture.  

## 7 - Monitor
On each corner bracket, one side has a circular hole and one side has a straight slot.

### 7.1 Create Monitor Support
Screw tightness: *moderate*

Attach two **corner brackets** to the **monitor support** piece.  For each corner bracket, place an **8-32 9/16 screw** through the slot and it into one of the side holes in the monitor support.

<table width="100%"><tbody><tr>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-1.png"></td>
<td width="50%"><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/extra/7-1.jpg"></td>
</tr></tbody></table>

Before you fully tighten the screws, place the **monitor support** against a flat surface and align the corner brackets such that the bottom of the **monitor support** touches the flat surface.
  
### 7.2 Attach Monitor Support to Frame
Screw tightness: *very tight*

Attach the **monitor support** to the **top frame** using the two holes in the rear.  Place an **8-32 9/16 screw** through the circular hole in each corner bracket, place this screw through the hole in the top frame, and attach a **locknut** to the end of the screw on the bottom side of the **top plate**.  

<img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/extra/7-2.jpg" width="60%">

<table width="100%"><tbody><tr><td><img src= "https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/assemblySteps/CAD/7-2_Ortho.png"></td><td><img src="https://raw.githubusercontent.com/MatthewCalligaro/RacecarWebsite/master/assets/img/extra/7-2.jpg"></td></tr></tbody></table>

To tighten each screw, hold the **locknut** with a *wrench* and tighten the screw with a *large Philips screw driver*, as shown below.

### 7.3 Attach Monitor to Support
Screw tightness: *tight*

Identify the threaded hole on the bottom of the **monitor**.  Place the **monitor** on the blue side of the **top plate** such that its threaded hole lines up with the slot in the center of the **monitor support**.  Screw a **M6x1 8mm screw** through the **monitor support** into the threaded hole in the **monitor**.

### 7.4 Attach Front Corner Brackets
Screw tightness: *very tight*

Identify the two screw holes in front of the monitor on the **top plate**.  Secure the slotted side of a **corner bracket** to the blue side of each hole using an **8-32 9/16 screw** and a **locknut** on the uncolored side of the hole.  Be sure to align the corner bracket so that it is fully against the monitor.  Tighten the screw using the same method shown in step 7.1 by holding the **locknut** with a *wrench* and tightening the screw with a *large Philips screwdriver*.

## 8 - Lidar PCB

### 8.1 Attach Standoffs
Screw tightness: *very gentle*

Gently screw four **4-40 MF standoffs** into the four holes shown on uncolored side of the **top plate**.  These holes are toward the front of the plate.

### 8.2 Attach Lidar PCB
Warning: *discharge any static before touching the Lidar PCB*\
Screw tightness: *gentle*

Carefully align the four screw holes of the **Lidar PCB** with the **4-40 MF standoffs** attached in step 8.1.  Make sure that the two micro USB ports of the **Lidar PCB** point upward, as shown in the pictures.  Secure the the **Lidar PCB** to the standoffs using four **4-40 1/4 screws**.  Remember to tighten the screws in multiple stages using a criss-cross pattern.

## 9 - Lidar
Screw tightness: *gentle*

Align the four legs of the Lidar with the with the holes shown on the blue side of the **top plate**, which are toward the front of the car.  Screw a **M2.5x0.45 12mm screws** into each leg, such that the head of the screw is against the uncolored side of the **top plate**.  Be sure to tighten the screws in multiple stages using a criss-cross pattern. 

## 10 - Top Plate
### 10.1 Remove Monitor
Remove the **monitor** by unscrewing the **M6x1 8mm** screw used in step 7.3.  This is necessary because the **monitor** blocks two of the screw holes needed in step 10.2.

### 10.2 Attach Top Plate
Screw tightness: *very tight*

On the **top plate**, you will find the same pattern of six holes used in step 6.  Align these holes with the **8-32 FF standoffs** attached to the **bottom plate**.  Secure each hole with a **washer** and an **8-32 9/16 screw**, such that the washer and screw head are on the blue side of the **top plate**.  Tighten the screws in multiple stages using a criss-cross pattern using a *large philips screwdriver*.  This time, there is no need to secure the standoff with a *wrench*.

### 10.3 Reattach Monitor
Reattach the monitor by repeating step 7.3.  

## 11 - Breadboard
Remove the yellow wax paper from the back of the **breadboard** to reveal the sticky foam tape.  Carefully align the **breadboard** with the very front of the blue side of the **top plate**.

## 12 - USB Hubs
### 12.1 Apply Foam Tape
Cut one piece of **foam tape** approximately 3.5 inches long.  Attach the sticky side of this piece to the middle of a **USB hub** by firmly pressing the **foam tape**.  Be sure to place the tape on the bottom of the **USB hub**, which is the side that does not say "Anker".  Finally, remove the wax paper from the **foam tape** to expose the other sticky side.

Repeat this process for a second **USB hub**.

### 12.2 Attach Bottom USB Hub
On the uncolored side of the **bottom plate**, attach the first **USB hub** toward the back of the car with the USB ports pointing toward the battery cradle, as shown below.  Firmly press the **USB hub** to secure the **foam tape**.

### 12.3 Attach Top USB Hub
On the uncolored side of the **top plate**, attach the second **USB hub** to the very back of the car with the USB ports pointing out of the back of the car, as shown below.  Notice that the USB ports are pointing the opposite direction as in step 12.2, and the same direction as the ports of the **Jetson Nano**.  Firmly press the **USB hub** while supporting the other side of the **top plate** to secure the **foam tape**.

## 13 - Speaker
### 13.1 Apply Foam Tape
Cut one piece of **foam tape** approximately 2.5 inches long.  Attach the sticky side of the **foam tape** to the middle of the **speaker** by firmly pressing the **foam tape**.  Be sure to place the tape on the bottom of the **speaker**, which is the side with the two light gray pieces of rubber.  Finally, remove the wax paper from the **foam tape** to expose the other sticky side.

### 13.2 Attach Speaker
On the blue side of the **top plate**, attach the speaker to the very back of the car, directly above the **USB hub** attached in step 12.3.  The speaker should point toward the back of the car, with the speaker cable pointing toward the front of the car.  Firmly press the **speaker** while supporting the other side of the **top plate** to secure the **foam tape**.

## 14 - Battery
Slide the battery into the battery cradle as shown.  Be sure that the USB ports of the battery face to the right side of the car, which is the side of the **Jetson Nano** with the micro USB port.

