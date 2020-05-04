.. _lab_2:

Lab 2: Color Images
============================================

In this lab, you will program the car to respond to images captured by the camera.

:download:`Presentation </assets/presentations/lab2.pdf>`

You can view the `starter code <https://github.com/MITLLRacecar/Student/blob/master/labs/lab2/lab2.py>`_ for this lab in the labs directory of your student repository.

=====================
Objectives
=====================

Main objective
""""""""""""""""""""
Program the car to follow and drive towards objects of a certain color.


Learning objectives
"""""""""""""""""""""

* Extract contours from a color image to identify the location and closeness of key objects.
* Implement proportional control to allow for smooth responses to stimuli.
* Use the camera module to capture color images with the car's camera.
* Use the display module to print images to the onboard monitor.

=====================
Instructions
=====================

Jupyter Notebook
"""""""""""""""""""""""

Work through the `lab 2 Jupyter notebook <https://github.com/MITLLRacecar/Student/blob/master/labs/lab2/lab2.ipynb>`_ on the car.  This Jupyter notebook will help you experiment with image processing and build up functions that you will need for the main challenges.

Warmup: Smoother Line Following
"""""""""""""""""""""""""""""""

Open the racecar directory on your computer in Visual Studio Code.  The starter code for lab 2 (labs/lab2/lab2.py) instructs the car to to follow a blue line.  However, this implementation is very jerky.

Replace the "TODO: (warmup)" comment with code that allows the car to follow a blue line more smoothly.

Main Challenge 1: Color Priority
""""""""""""""""""""""""""""""""

Replace the "TODO: (challenge 1)" comments with code that allows the car to follow lines of the following colors with the following priorities:

1. Red (highest priority)
1. Green
1. Blue (lowest priority)

For example, if the car sees a red, green, and blue line at the same time, it should follow the red line.  The car should only follow a blue line if it does not see any red or green lines.

Main Challenge 2: Cone Parking
""""""""""""""""""""""""""""""

Replace the "TODO: (challenge 2)" comments with code that allows the car to drive up to an orange cone and stop 1 meter in front of it.  If the car is not pointing directly towards the cone, it should steer towards it.  If the car is too close to the cone, it should back up.  If you pick up the cone and move it, the car should follow the cone.
