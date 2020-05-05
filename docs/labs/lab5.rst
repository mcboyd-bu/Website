.. _lab_5:

Lab 5: Lidar
============================================

So far, we have primarily used the car's camera to view the world in front of the car  Unfortunately, the camera cannot see to the side or rear of the car, which makes other tasks such as wall following more difficult.

In this lab, we will use the Lidar to gain a 360 degree view around the car and use this expanded field of view to solve new problems such as wall following.

=====================
Objectives
=====================

Main objective
""""""""""""""""""""
Use the Lidar to increase the car's field of view and use this to complete new navigational tasks.

Learning objectives
"""""""""""""""""""""

* Explore the SLAM visualization using the Lidar.
* Use the :ref:`library:lidar` to extract Lidar information.
* Use the Lidar information to respond to objects around the car.

=====================
Instructions
=====================

Warmup: Safety Stop (Revisited)
"""""""""""""""""""""""""""""""

In the warmup for ref:`lab_3`, you implemented a safety stop which prevents the car from driving forward into an object. Replace the "TODO: (warmup)" comment with a new safety stop that works in both directions by also preventing the car from driving backward into an object.

Main Challenge: Wall Following
""""""""""""""""""""""""""""""

To navigate a hallway or maze, the car can drive forward along a wall.  The car will need to stay within 0.5 to 1 meter away from the wall to its right and turn when the wall reaches a corner.

Replace the "TODO: (main challenge)" comment with code to follow a wall as described above.
