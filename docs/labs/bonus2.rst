.. _bonus_2:

Bonus Lab 2: Sensor Fusion
============================================

By now, we have used several sensors to allow the car to understand its place in its environment. Several of these sensors can be used to calculate the car's velocity, but on their own, no particular method is particularly accurate.

Sensor fusion is the process of combining several uncertain sources of truth to create a more reliable source of truth. In this lab, we will perform sensor fusion to calculate a more accurate velocity measurement for the car.

:download:`Presentation Slides </assets/presentations/bonus2.pdf>`

`Video Lecture <https://mit.zoom.us/rec/share/4ZQyJOj2p3JOWJ3C2gL4SqQ-Qd_eX6a81HUW-PRfnxvKBDdaFONNjRF11jmmbT0J>`_

You can view the `starter code <https://github.com/MITLLRacecar/Student/blob/master/labs/bonus2/>`_ for this lab in the labs directory of your student repository.

==========
Objectives
==========

Main objective
""""""""""""""
Use sensor fusion to calculate an accurate measurement of velocity.

Learning objectives
"""""""""""""""""""

* Explore several ways of calculating velocity with the car's hardware.
* Identify the strengths and limitations of each approach.
* Use accurate velocity measures to implement a speed limit.

============
Instructions
============

Bonus Lab 2: Speed limit
""""""""""""""""""""""""

In this lab, we will implement a speed limit which prevents the car from traveling above 0.5 m/s, regardless of incline.

Open the racecar directory on your computer in Visual Studio Code and open the starter code for bonus lab 2 (``labs/bonus2/bonus2.py``). The starter code currently drives using the same controls as in :ref:`lab_1`.

In order to perform sensor, we will need several independent sources of velocity information. Replace the first ``TODO`` comment at least three independent methods of calculating velocity. Consider the strengths and limitations of each method. Under what circumstances would each method be particularly unreliable?

Next, use sensor fusion to combine these measurements into a single velocity estimate. In general, a measurement should be given greater weight if it is more reliable. How can we estimate the reliability of a measurement?

Finally, use this velocity estimate to prevent the car from traveling over 0.5 meters per second.
