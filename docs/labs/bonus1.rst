.. _bonus_1:

Bonus Lab 1: Inertial Measurement
=================================

In this lab, you will program the car to utilize the the acceleration and rotation information provided by the inertial measurement unit (IMU).

:download:`Presentation Slides </assets/presentations/bonus1.pdf>`

`Video Lecture <https://mit.zoom.us/rec/share/zpUrBIrz6EdJU5HP8mXFevU9WZb-T6a80yRP_qALnU6koyzebq-V6_II6ZP_wV9j>`_

You can view the `starter code <https://github.com/MITLLRacecar/Student/blob/master/labs/bonus1/>`_ for this lab in the labs directory of your student repository.

==========
Objectives
==========

Main objective
""""""""""""""
Program the car to use the IMU to reason about its physical state in the world.

Learning objectives
"""""""""""""""""""

* Use the :ref:`library:physics` to extract acceleration and rotation information.
* Use this information to control car behavior.
* Perform numerical integration to extrapolate changes in position.

============
Instructions
============

Bonus Lab 1A: Roll Protection
"""""""""""""""""""""""""""""

If the center of mass of a car is far off the ground, the car may roll if it turns too sharply. The RACECAR-MN has been designed to prevent rolling, but for this lab, we will pretend that we are carrying a large load on top of the car.

Open the racecar directory on your computer in Visual Studio Code and open the starter code for bonus lab 1A (``labs/bonus1/bonus1a.py``). The starter code currently drives using the same controls as in :ref:`lab_1`.

Replace the ``TODO: (warm up)`` comment with code that prevents the car from turning too sharply. If you are using RacecarSim, the racecar's center of mass has been artificially increased for this lab, so you should specifically prevent the car from tipping over. If you are using a physical RACECAR-MN, you can define "too abruptly" as you see fit.

Bonus Lab 2B: Driving in Shapes (Revisited)
"""""""""""""""""""""""""""""""""""""""""""

In the main challenge of :ref:`lab_1`, you programmed the car to to drive in shapes by hard coding speed and time parameters. As you may have found, tuning these parameters can be quite tedious. Further, these tuned parameters will no longer be accurate if a different surface material or incline causes the car to travels at a different speed.

In bonus lab 1b (``labs/bonus1/bonus1b.py``), replace the ``TODO: (challenge)`` comment with code that uses the Physics module to drive in the same shapes specified in lab 1. As a reminder, these shapes are as follows:

* After the A button is pressed, the car should drive in a circle.
* After the B button is pressed, the car should drive in a square.
* After the X button is pressed, the car should drive in a figure eight.
* After the Y button is pressed, the car should drive in a shape of your design.
