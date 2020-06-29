.. _simulation:

RacecarSim
==========

*The RACECAR-MN Simulation Environment*

RacecarSim is a simulation environment created in Unity to emulate the physical RACECAR-MN.  It can serve as a testing environment, allowing users to safely and rapidly test software before deploying it to a physical car.  It also can serve as a substitute for the car, allowing students to complete the entire course without a RACECAR-MN.  The simulation contains a level for each lab, which includes obstacles and objectives corresponding to the lab content.

.. image:: /assets/img/simulation/SimulationDemo.*
  :width: 100%
  :align: center

`This video <https://www.youtube.com/watch?v=PU0j6RMKD0k>`_ shows how to use the simulation.

========
Download
========

RacecarSim is currently in alpha and has not been extensively tested.  You can download it for Mac and Windows here.

* `Windows <https://drive.google.com/file/d/1s3BwA2dvxmCeeIPLm6MzdUbA5IsnyfQt/view?usp=sharing>`_
* `Mac <https://drive.google.com/file/d/1xEWAkdMGtvEP2qzjRcXbzuAvPVvM-pvO/view?usp=sharing>`_

=========================
Installation Instructions
=========================

1. If you have not done so already, complete all of the steps in :ref:`computer_setup`.
2. **(This step is for Mac only)**: Open a terminal and run the command `sudo sysctl -w net.inet.udp.maxdgram=65535`.  This will increase the maximum UDP datagram size, which is necessary for the simulation to communicate with Python and Jupyter.
3. If you have an Xbox-compatible controller, plug it in to your computer via USB.  If not, you can use keyboard keys instead.
4. Download the simulation compatible with your OS using the links provided above.
5. Unzip or untar the directory.
6. Open the extracted directory and launch the executable.
7. Once the program loads, you should see a screen titled "RACECAR-MN Simulation".  Select a level (Demo is default) and click the "Begin Simulation" button.  You should see a level load with the RACECAR.
8. The car begins in default drive mode.  You can drive around with the standard default drive controls (triggers to accelerate, left joystick to steer).

=================
Running a Program
=================

1. **(This step is for Windows only)**: Launch XLaunch.  On the first page (Select display settings), enter ``42`` as the Display number.  Use the default settings for the remaining options.

.. image:: /assets/img/simulation/XLaunch.*
  :width: 80%
  :align: center

2. Open a terminal. (On Windows, remember to use bash, as described in :ref:`bash`).
3. Navigate to the directory containing the Python file you wish to run.  Remember that you can use ``racecar cd`` to immediately navigate to your labs directory.
4. Run your program by entering ``racecar sim <filename.py>``, such as ``racecar sim demo.py``.  You should see the message ">> Python script loaded, please enter user program mode in Unity".
5. Click on the simulation and press the start button (Xbox controller) or enter (keyboard).  The Hud should now say "User Program" in the bottom right.  If so, the car is now being controlled by your Python program.

Troubleshooting
"""""""""""""""

**1. When I run** ``racecar sim <filename.py>``, **I get an error similar to** ``python3: can't open file '<filename.py>': [Errno 2] No such file or directory``.

To use the ``racecar sim`` command, you must be in the directory containing the program you wish to run.  Enter `ls` to list out the files in your current directory.  If you do not see the file you are trying to run, then you are not in the correct directory.  Navigate to the correct directory using the `cd` command.
