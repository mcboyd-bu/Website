.. _lab_2:

Lab 2: Color Images
============================================

In this lab, you will program the car to respond to images captured by the camera.

Presentation Slides: :download:`2A: Color Images </assets/presentations/lab2a.pdf>`, :download:`2B: State Machines </assets/presentations/lab2a.pdf>`

Video Lectures: `lab 2A <https://mit.zoom.us/rec/share/6JdXC-38qGJJGM_N9m_xU6gcGKT9T6a82iRNr6dez0pqQ1EPqlZGp42C8K1l081i>`_ and `lab 2B <https://mit.zoom.us/rec/share/9NA2dpegqU9IXoWd9W_hVJQxG6Cmeaa8gShL8_Rfzx54nrB7P2F38h8XywTe_0vn?startTime=1594393221000>`_.

You can view the `starter code <https://github.com/MITLLRacecar/Student/blob/master/labs/lab2/>`_ for this lab in the labs directory of your student repository.

=====================
Objectives
=====================

Main objective
""""""""""""""""""""
Use the color camera to recognize and respond to objects of certain colors.

Learning objectives
"""""""""""""""""""""

* Extract contours from a color image to identify the location and closeness of key objects.
* Implement proportional control to allow for smooth responses to stimuli.
* Use the :ref:`library:camera` to capture color images with the car's camera.
* Use the :ref:`library:display` to print images to the onboard monitor.

=====================
Instructions
=====================

Jupyter Notebook
""""""""""""""""

Work through the `lab 2 Jupyter notebook <https://github.com/MITLLRacecar/Student/blob/master/labs/lab2/lab2.ipynb>`_ (``labs/lab2/lab2.ipynb``). This Jupyter notebook will help you experiment with image processing and build up functions that you will need for the main challenges.

See :ref:`jupyter` for instructions on how to use the Jupyter Notebook with RacecarSim or a physical RACECAR-MN.

Lab 2A - Line Following
"""""""""""""""""""""""

Open the racecar directory on your computer in Visual Studio Code.  The starter code for lab 2A (``labs/lab2/lab2a.py``) instructs the car to to follow a blue line.  However, this implementation is very jerky.

Replace the ``TODO: (warm up)`` comment with code that allows the car to follow a blue line more smoothly.

Replace the ``TODO: (challenge 1)`` comments with code that allows the car to follow lines of the following colors with the following priorities:

1. Red (highest priority)
2. Green
3. Blue (lowest priority)

For example, if the car sees a red, green, and blue line at the same time, it should follow the red line.  The car should only follow a blue line if it does not see any red or green lines.

Lab 2B - Cone Parking
"""""""""""""""""""""

The starter code for lab 2B (``labs/lab2/lab2b.py``) has similar helper functions to lab 2A, but it currently has no instructions for moving the car. Replace the ``TODO:`` comment with code that allows the car to drive up to an orange cone and stop 30 cm in front of it.  If the car is not pointing directly towards the cone, it should steer towards it.  If the car is too close to the cone, it should back up.  If you pick up the cone and move it, the car should follow the cone.
