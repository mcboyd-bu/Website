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

RacecarSim is currently in beta.  You can download it for Mac and Windows here.

* `Windows <https://drive.google.com/file/d/1s3BwA2dvxmCeeIPLm6MzdUbA5IsnyfQt/view?usp=sharing>`_
* `Mac <https://drive.google.com/file/d/1xEWAkdMGtvEP2qzjRcXbzuAvPVvM-pvO/view?usp=sharing>`_

=========================
Installation Instructions
=========================

1. If you have not done so already, complete all of the steps in :ref:`computer_setup`.
2. If you have an Xbox-compatible controller, plug it in to your computer via USB.  If not, you can use keyboard keys instead.
3. Download the simulation compatible with your OS using the links provided above.
4. Unzip or untar the directory.
5. Open the extracted directory and launch the executable.
6. Once the program loads, you should see a screen titled "RACECAR-MN Simulation".  Select a level (Demo is default) and click the "Begin Simulation" button.  You should see a level load with the RACECAR.
7. The car begins in default drive mode.  You can drive around with the standard default drive controls (triggers to accelerate, left joystick to steer).

=================
Running a Program
=================

1. **This step is for Windows only**: Run XLaunch.  On the first page (Select display settings), enter ``42`` as the Display number.  Use the default settings for the remaining options.  To save time, you can save these settings with the ``Save configuration`` button on the last page.

.. image:: /assets/img/simulation/XLaunch.*
  :width: 80%
  :align: center

**You must run XLaunch once every time you restart your computer**.

2. Open a terminal. (On Windows, remember to use bash, as described in :ref:`bash`).
3. Navigate to the directory containing the Python file you wish to run.  Remember that you can use ``racecar cd`` to immediately move to your labs directory.
4. Run your program by entering ``racecar sim <filename.py>``, such as ``racecar sim demo.py``.  You should see the message ``>> Python script loaded, awaiting connection from RacecarSim.``.
5. If you have not already, open RacecarSim and select the level corresponding to the lab which you wish to test.  The terminal should now print the message ``>> Connection established with RacecarSim.  Enter user program mode in RacecarSim to begin...``.
6. In RacecarSim, press the start button (Xbox controller) or enter (keyboard).  The HUD should now say "User Program" in the bottom right.  If so, the car is now being controlled by your Python program.

**The very first time you run a Python program with RacecarSim or send across images, it frequently will not succeed because your computer needs to run first-time setup associated with the UDP protocol.**  Try restarting RacecarSim and your terminal.

Troubleshooting
"""""""""""""""

In general, the following strategies (in increasing order of severity) are a good first step if things are not working:

* Restart the current level by pressing ``START + BACK`` (Xbox controller) or ``enter + delete`` (keyboard).
* Return to the main menu with ``escape`` and restart the level from there.
* Restart RacecarSim.
* Restart your computer.

**1. When I run** ``racecar sim <filename.py>``, **I get an error similar to** ``python3: can't open file '<filename.py>': [Errno 2] No such file or directory``.

To use the ``racecar sim`` command, you must be in the directory containing the program you wish to run.  Enter ``ls`` to list out the files in your current directory.  If you do not see the file you are trying to run, then you are not in the correct directory.  Navigate to the correct directory using the ``cd`` command.

**2. (Mac or Linux): My program can control the car and access LIDAR data, but as soon as I request a depth or color image, it crashes.**

This may occur if the UDP packet size is not large enough to fit the depth and color images.  Open a terminal and run the command ``sudo sysctl -w net.inet.udp.maxdgram=65535``.

.. note::
  This command should have been added to the ``.config`` file in the ``scripts`` directory of your racecar repository if you selected Mac or Linux `during setup <https://mitll-racecar-mn.readthedocs.io/en/latest/tool_setup.html>`_.  If this command is missing, you should consider adding it so that it is automatically run every time you create a terminal.

**3. (Windows): When I attempt to display an image, I receive the error** ``: cannot connect to X server localhost:42.0``.

.. image:: /assets/img/simulation/XServerError.*
  :width: 100%
  :align: center

Make sure that you have created an X server with XLaunch (See step 1 of Running a Program above).  Unfortunately, you will need to run XLaunch every time you restart your computer.
