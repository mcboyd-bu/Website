.. _simulation_python:

Connecting a Python Program
===========================

1. **This step is for Windows only**: Run XLaunch.  On the first page (Select display settings), enter ``42`` as the Display number.  Use the default settings for the remaining options.  To save time, you can save these settings with the ``Save configuration`` button on the last page.

.. image:: /assets/img/simulation/XLaunch.*
  :width: 80%
  :align: center

**You must run XLaunch once every time you restart your computer**.

2. Open a terminal. (On Windows, remember to use bash, as described in :ref:`bash`).
3. Navigate to the directory containing the Python file you wish to run.  Remember that you can use ``racecar cd`` to immediately move to your labs directory.
4. Run your program by entering ``racecar sim <filename.py>``, such as ``racecar sim demo.py``.  You should see the message ``>> Python script loaded, awaiting connection from RacecarSim.``.
5. If you have not already done so, open RacecarSim and select the level corresponding to the lab which you wish to test.  The terminal should now print the message ``>> Connection established with RacecarSim.  Enter user program mode in RacecarSim to begin...``. In RacecarSim, the Python logo should now be filled in.
6. In RacecarSim, press the start button (Xbox controller) or enter (keyboard).  The HUD should now say "User Program" in the bottom right.  If so, the car is now being controlled by your Python program.

.. image:: /assets/img/simulation/UserProgramMode.*
  :width: 100%
  :align: center

.. warning::
  The very first time you run a Python program with RacecarSim or send across images, it frequently will not succeed because your computer needs to run first-time setup associated with the UDP protocol.  Try restarting RacecarSim and your terminal.

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

**4. (Mac): RacecarSim responds to keyboard input but does not correctly respond to input from my Xbox 360 controller. For example, certain buttons/joysticks register as other buttons/joysticks or do nothing at all.**

Make sure that you have installed the current Xbox 360 controller driver, as described in :ref:`simulation_installation`.

**5. After connecting a Python program, RacecarSim becomes very lagged and/or has a decreased frame rate.**

This likely means that your Python program is too computationally intensive. Try to run a simpler Python program (such as ``demo.py``) and see if the issue persists.

Here are some steps you can take to make your Python program run faster:

* **Be cautious of using large loops**, such as a loop iterating over all of the pixels in an image. If you find yourself needing to write such a loop, try to use a library function instead (such as Numpy functions).
* **Print fewer images to the screen**. While printing an image every frame can help with debugging, it is quite computationally intensive. You can also disable the display module entirely by running in headless mode (add the ``-h`` command line flag, such as ``racecar sim test_core.py -h``).
* **Reduce the number of lines you print**. Printing to the terminal can be surprisingly slow: even printing one line per frame can be enough to cause lag. Try only printing debug messages in ``update_slow()`` or when a certain button is pressed on the controller.
* **Never use** ``sleep()``, as this will also suspend RacecarSim and is guaranteed to cause lag. If you need to wait to execute a block of code, create a global counter variable and change it by ``rc.get_delta_time()`` in ``update()``.
* **Use** ``rc.camera.get_color_image_no_copy()`` **instead of** ``rc.camera.get_color_image()`` if you do not modify the image, such as by drawing on top of it.
