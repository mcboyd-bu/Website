.. _lab_5:

Lab 5: AR Markers
=================

AR markers are black and white patterns which are designed to be recognized by computers. In this lab, you will program the car to identify and respond to AR markers.

.. figure:: /assets/img/labs/ARMarker.*
  :align: center

  An ArUco AR marker.

:download:`Presentation Slides </assets/presentations/lab5.pdf>`

`Video Lecture <https://mit.zoom.us/rec/share/585KLPLJ33tLRK_Ayh_bd4oiONjUT6a8hndLq6VezUohSbA5iCpW2q8RMdbh53sf>`_

You can view the `starter code <https://github.com/MITLLRacecar/Student/blob/master/labs/lab5/>`_ for this lab in the labs directory of your student repository.

==========
Objectives
==========

Main objective
""""""""""""""

Identify and respond to the AR markers in the environment.

Learning objectives
"""""""""""""""""""

* Identify the the AR markers in a color image using the ArUco library.
* Use the corner information of an AR marker to determine its orientation and color.
* Make dynamic decisions based on the id, orientation, and color of an AR marker.

============
Instructions
============

Jupyter Notebook
""""""""""""""""

Lab 5 currently does not have a Jupyter notebook, but one will be added soon (hopefully before January 1, 2021).

Lab 5: AR Marker Decisions
""""""""""""""""""""""""""

Until now, every lab has used a static race course which is the same every time. This lab introduces the first *dynamic* race course which has randomized elements which are not known beforehand. Specifically, we will need to turn either left or right, and specific traits of an AR marker will indicate which direction to turn.

Open the racecar directory on your computer in Visual Studio Code and open the starter code for lab 5 (``labs/lab5/lab5.py``). The starter code currently identifies the markers in the current color image.

This lab consists of 3 parts, each corresponding to an AR marker.

#. Turn left if the marker has an ID of 0 and right if the marker has an ID of 1.
#. Turn left if the marker faces is rotated 90 degrees to the left and right if the marker is rotated 90 degrees to the right.
#. Follow the color line which matches the color border surrounding the marker.
