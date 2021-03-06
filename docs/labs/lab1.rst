.. _lab_1:

Lab 1: Simulation Setup & Driving
==============

In this lab, you will setup the RACECAR simulation environment and program the car to respond to input by driving in predefined shapes.

First, visit the :ref:`simulation` page and setup the RACECAR Simulation Environment. 

You can view the `starter code <https://github.com/MITLLRacecar/Student/blob/master/labs/lab1/lab1.py>`_ for this lab in the labs directory of your student repository.

==========
Objectives
==========

Main objective
""""""""""""""

Program the car to respond to controller input by driving.

Learning objectives
"""""""""""""""""""

* Understand and use the start-update paradigm to create a program which can run on the car.
* Use the :ref:`library:drive` to control the car.
* Use the :ref:`library:controller` to respond ot input from the Xbox controller in real time.

============
Instructions
============

Setup
"""""

If you have not done so already, please follow the instructions for :ref:`computer_setup` and :ref:`first_program`.

Warm Up: Driving Controls
"""""""""""""""""""""""""

Open the racecar directory on your computer in Visual Studio Code. In ``labs/lab1/lab1.py``, replace the ``TODO: (warm up)`` comment with code that allows the car to respond to controller input as follows:

* When the right trigger is pressed, the car should accelerate forward.
* When the left trigger is pressed, the car should accelerate backward.
* The front wheels of the car should steer based on the horizontal position of the left joystick.

Main Challenge: Driving in Shapes
"""""""""""""""""""""""""""""""""

For your main challenge, replace the ``TODO: (main challenge)`` comments with code that allows the car to drive in predefined shapes when a button is pressed.

* After the A button is pressed, the car should drive in a circle.
* After the B button is pressed, the car should drive in a square.
* After the X button is pressed, the car should drive in a figure eight.
* After the Y button is pressed, the car should drive in a shape of your design. Document this shape in the start message printed by the start function.

At this point, you do not need to use any of the sensors on the car to calculate how much the car has turned. Simply experiment with different speeds and times until you reach the desired shapes.
