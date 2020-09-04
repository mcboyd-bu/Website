.. _lab_3:

Lab 3: Depth Images
============================================

In this lab, you will program the car to respond to depth images captured by the camera.

:download:`Presentation Slides </assets/presentations/lab3.pdf>`

`Video Lecture (some of the recording was lost) <https://mit.zoom.us/rec/share/681JM6z99VFIX4nytRqOeaUnRIi5eaa8hyAd_6ZYzxktuWv3dp4OZmfFna-NXA9A>`_

You can view the `starter code <https://github.com/MITLLRacecar/Student/blob/master/labs/lab3/>`_ for this lab in the labs directory of your student repository.

=====================
Objectives
=====================

Main objective
""""""""""""""""""""
Use depth information (in coordination with color information) to perform simple navigation tasks.

Learning objectives
"""""""""""""""""""""

* Explore different methods of visualizing depth images.
* Use depth information to estimate the distance and orientation of objects.
* Use the :ref:`library:camera` to capture depth images with the car's camera.
* Use the :ref:`library:display` to visualize depth images on the onboard monitor.

=====================
Instructions
=====================

Physical RACECAR-MN only: Visualization Tools
"""""""""""""""""""""""""""""""""""""""""""""

Connect a mouse and keyboard to your car so that you can control it directly (using the onboard monitor).  We will first run RVIZ, a tool which helps us visualize the depth images captured by the camera.

1. Open a terminal and run ``rviz``.  A new window should appear.
2. Click ``add`` and ``by topic``, and select ``depth/image_rect_raw``.  You will want to display DepthCloud compressed.
3. Explore other types of visualizations.

RQT is another visualization software.  Try running this as well.

1. Open a terminal and run ``rqt``. A new window should appear.
2. In the toolbar, select ``Plugins->Visualization->Image View``.
3. Select topics to view live from the camera.

Finally, you can read and display depth images using the Camera and Display modules of racecar_core.  Run the lab 3 starter code, and you should see a visualization of the depth image appear on the onboard monitor.

Jupyter Notebook
""""""""""""""""

Work through the `lab 3 Jupyter notebook <https://github.com/MITLLRacecar/Student/blob/master/labs/lab2/lab2.ipynb>`_ (``labs/lab2/lab2.ipynb``). It will teach you how to use the depth camera and build up important helper functions for working with depth images.

Lab 3A: Safety Stop
"""""""""""""""""""

Open the racecar directory on your computer in Visual Studio Code and open the starter code for lab 3A (``labs/lab3/lab3A.py``).  The starter code currently drives using the same controls as in :ref:`lab_1`.

Replace the ``TODO: (warm up)`` comment with code that stops the car if it is about to drive forward into an object.  You will likely want to use the center_distance variable provided in the starter code.

Lab 3B Cone Parking (Revisited)
"""""""""""""""""""""""""""""""

In lab 2B, you programmed the car to to park 30 cm away from an orange cone by extracting contours from a color image (see :ref:`lab_2`).  In order to estimate the distance of the cone, you likely used the area of the cone's contour.  However, this approach is not very accurate and does not work for cones of different sizes.

In lab 3B (``labs/lab3/lab3b.py``), you will perform the same task but use a combination of depth and color information to accommodate cones of different sizes. You may wish to copy some of your code from lab 2B.

Lab 3C: Wall Parking
""""""""""""""""""""

In lab 3C (``labs/lab3/lab3c.py``), your goal is to park the car 20 cm away from a flat wall. The car must align itself so that it is facing directly at the wall. The car must park without hitting the wall and may need to back up and drive forward multiple times to align itself.
