.. _lab_4:

Lab 4: Inertial Measurement
============================================

In this lab, you will program the car to utilize the the acceleration and rotation information provided by the inertial measurement unit (IMU).

=====================
Objectives
=====================

Main objective
""""""""""""""""""""
Program the car to use the IMU to reason about its physical state in the world.

Learning objectives
"""""""""""""""""""""

* Use the :ref:`library:physics` to extract acceleration and rotation information.
* Use this information to control car behavior.
* Perform numerical integration to extrapolate changes in position.

=====================
Instructions
=====================

Warm Up: Roll Protection
""""""""""""""""""""""""

If the center of mass of a car is too far off the ground, the car can roll if it turns too sharply.  The RACECAR-MN has been designed to prevent rolling, but let's pretend that we are carrying a large load and need to be concerned about rolling.

Open the racecar directory on your computer in Visual Studio Code and open the starter code for lab 4 (``labs/lab4/lab4.py``).  The starter code currently drives using the same controls as in :ref:`lab_1`.

Replace the ``TODO: (warm up)`` comment with code that prevents the car from turning too abruptly.  You can define "too abruptly" as you see fit, but choose a value such that your safety feature noticeably limits your turn radius at high speeds.

Main Challenge: Driving in Shapes (Revisited)
"""""""""""""""""""""""""""""""""""""""""""""

In the main challenge of :ref:`lab_1`, you programmed the car to to drive in shapes by hard coding speed and time parameters.  As you may have found, tuning these parameters can be quite tedious.  Further, these tuned parameters will no longer be accurate if a different surface material or incline causes the car to travels at a different speed.

Replace the ``TODO: (challenge)`` comment with code that uses the Physics module to drive in the same shapes specified in lab 1.  As a reminder, these shapes are as follows:

* After the A button is pressed, the car should drive in a circle.
* After the B button is pressed, the car should drive in a square.
* After the X button is pressed, the car should drive in a figure eight.
* After the Y button is pressed, the car should drive in a shape of your design.
