.. _lab_3:

Lab 3: Depth Images
============================================

In this lab, you will program the car to respond to depth images captured by the camera.

You can view the `starter code <https://github.com/MITLLRacecar/Student/blob/master/labs/lab3/lab3.py>`_ for this lab in the labs directory of your student repository.

=====================
Objectives
=====================

Main objective
""""""""""""""""""""
Program the car to use both depth and color information to perform simple navigation tasks.

Learning objectives
"""""""""""""""""""""

* Explore different methods of visualizing depth images.
* Use depth information to estimate the distance and orientation of objects.
* Use the camera module to capture depth images with the car's camera.
* Use the display module to visualize depth images on the onboard monitor.

=====================
Instructions
=====================

Visualization Tools
"""""""""""""""""""""""

Connect a mouse and keyboard to your car so that you can control it directly (using the onboard monitor).  We will first run RVIZ, a tool which helps us visualize the depth images captured by the camera.

1. Open a terminal and run "rviz".  A new window should appear.
1. Click "add" and "by topic", and select "depth/image_rect_raw".  You will want to display DepthCloud compressed.
1. Explore other types of visualizations.

RQT is another visualization software.  Try running this as well.

1. Open a terminal and run "rqt". A new window should appear.
1. In the toolbar, select "Plugins->Visualization->Image View".
1. Select topics to view live from the camera.

Finally, you can read and display depth images using the Camera and Display modules of racecar_core.  Run the lab 3 starter code, and you should see a visualization of the depth image appear on the onboard monitor.

Warmup: Safety Stop
"""""""""""""""""""

Open the racecar directory on your computer in Visual Studio Code and open the starter code for lab 3 (labs/lab3/lab3.py).  The starter code currently drives using the same controls as in :ref:`lab_1`.

Replace the "TODO: (warmup)" comment with code that stops the car if it is about to drive forward into an object.  You will likely want to use the center_distance variable provided in the starter code.

Main Challenge 1: Cone Parking (Revisited)
""""""""""""""""""""""""""""""""""""""""""""

In main challenge 2 of :ref:`lab_2`, you programmed the car to to drive up to an orange cone and stop 1 meter in front of it by extracting contours from a color image.  In order to estimate the distance of the cone, you likely used the area of the cone's contour.  However, this approach is not very accurate and does not work for cones of different sizes.

Replace the "TODO: (challenge 1)" comment with code that uses both color and depth image to achieve this task more reliably.  You will likely want to use your code from lab 2 as a starting point, but incorporate depth information to estimate the cone's distance.  Make sure that your car stops 1 meter in front of cones of multiple sizes.


Main Challenge 2: Wall Parking
""""""""""""""""""""""""""""""

Replace the "TODO: (challenge 2)" comment with code that causes the car to orient itself so that it directly faces towards the closest wall.  The car should do this without hitting the wall, and may need to back up and drive forward multiple times to align itself.
