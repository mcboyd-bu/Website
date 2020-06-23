.. _simulation:

RacecarSim
=================================================
*The RACECAR-MN Simulation Environment*

RacecarSim is currently in alpha, and has only been tested on Windows.  You can download it here:

* `Windows <https://drive.google.com/file/d/1s3BwA2dvxmCeeIPLm6MzdUbA5IsnyfQt/view?usp=sharing>`_
* `Mac <https://drive.google.com/file/d/1xEWAkdMGtvEP2qzjRcXbzuAvPVvM-pvO/view?usp=sharing>`_

Usage Instructions
""""""""""""""""""

1. Download the simulation compatible with your OS using the links provided above.
2. Unzip the folder.
3. Launch the program.  Windows: double click on RacecarSim.exe.  Mac and Linux: Not tested.
4. Once the program loads, you should see a screen titled "RACECAR-MN Simulation".  Select a level (Demo is default) and click the "Begin Simulation" button.  You should see a level load with the RACECAR.
5. At this point, the car will be in default drive mode.  You can drive around with the standard default drive controls.

To run a program:

1. Open bash.
2. Navigate to a racecar program you wrote.
3. Run the program with the ``-s`` flag for simulation (ex: ``python3 demo.py -s``).  You should see the message ">> Python script loaded, please enter user program mode in Unity"
4. Click on the simulation and press the start button (Xbox controller) or enter (keyboard).  The Hud should now say "User Program" in the bottom right.  If so, the car is now being controlled by your Python program.

`This demo video <https://www.youtube.com/watch?v=eIdPqycrYUo>`_ shows several of these steps.

More thorough instructions coming soon!
