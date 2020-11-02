.. _phase_1_challenge:

Phase 1 Challenge: Cone Slalom
==============================

At this point, we have explored several strategies for observing and responding to the environment around the car. We now have all of the tools necessary to conquer our first major challenge!

Slalom is an olympic skiing event in which competitors weave around colored poles. To emulate this event, we will program our car to weave around colored cones.

.. figure:: /assets/img/labs/olympicSlalom.*
  :align: center

  A skier racing on a slalom course.

The course consists of a line of cones one meter apart alternating between red and blue, with the first cone red. The car should navigate the course such that it passes to the right of each red cone and to the left of each blue cone. Your goal is to complete the course as quickly as possible without hitting any cones.

RacecarSim has a normal and hard version of the cone slalom course. The hard course begins the exact same as the normal course but includes two additional sections: one with extremely close cones, and one with an uphill portion. You should be able to complete the normal course with only the depth and color cameras, but you may wish to come back to the hard version after you have learned about the LIDAR and/or IMU.
