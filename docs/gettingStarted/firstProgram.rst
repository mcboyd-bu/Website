.. _first_program:

Running your First Program
============================================

Before you begin, please make sure that you have completed all of the instructions on :ref:`computer_setup`.

To turn on your RACECAR-MN, please take the following steps.

1. Plug in the Xbox controller to one of the USB ports.
2. Plug the two USB cables into the white battery.
3. Connect the black car battery using the red banana connectors.
4. Turn on your car using the switch.  You should hear it beep once.

On your personal computer, please take the following steps.

1. Make sure that your personal computer is connected to the same Wi-Fi router as your RACECAR-MN.
2. Open a new terminal.  If you are using Windows, you must use `bash <https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab>`_, not PowerShell or Command Prompt.
3. Enter ``racecar setup`` to create your team directory on your RACECAR-MN.
4. Enter ``racecar connect`` to connect to your RACECAR-MN.  Once you connect, run ``teleop`` and **leave this terminal window open**.  The front wheels of the car should now be pointing directly forward and resist turning.
5.  Open a new terminal and enter ``racecar connect`` to connect to your RACECAR-MN a second time.  Enter ``python demo.py`` to run the demo program.

Your RACECAR-MN is now in default drive mode.  You can accelerate using the triggers and steer with the left joystick.  To exit the program, press the start and back buttons at the same time.
