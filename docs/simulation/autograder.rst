.. _simulation_autograder:

Autograder
==========

The RacecarSim autograder evaluates a lab solution by using it to complete a series of trials. Each trial tests a specific part of the overall lab objective. If you are taking the Mini-Racecar OpenEdx course, you will use the autograder to earn a score on each lab. Instructors may also choose to incorporate the autograder into their grading scheme.

=========================
How to Use the Autograder
=========================

1. Open RacecarSim.
2. If you have not done so already, you will first need to enter your username in the **Settings** page (this is how you prove that your scores were earned by you). If you are using the OpenEdx course, enter your OpenEdx username. Otherwise, follow the instructions provided by your instructor.
3. In the main menu, choose the lab you wish to test and select **Autograder** Mode from the dropdown.

.. image:: /assets/img/simulation/AutograderMenu.*
  :width: 100%
  :align: center

4. This will load the autograder for the level in **Wait** mode. In a terminal, connect your lab solution as described in :ref:`simulation_python`. For example we would enter the following commands on the terminal to run our lab 1 solution:

::

  racecar cd
  cd lab1
  racecar sim lab1.py

.. image:: /assets/img/simulation/AutograderWait.*
  :width: 100%
  :align: center

Once your program successfully connects, the Python icon in RacecarSim should become filled in.

.. note::
  To improve performance, it is often helpful to run your program in "headless" mode when using the autograder by passing in the ``-h`` flag (ex: ``racecar sim lab1.py -h``). This disables the display module, which preventing images from being shown.

5. You can now begin the autograder in RacecarSim by pressing the start button (Xbox controller) or enter (keyboard). The autograder will run multiple trials, and you will earn a score on each trial.

6. When the final trial finishes (or you fail a required trial), RacecarSim will show a summary of your performance. From top to bottom, this summary includes:

  * Your overall score and time an the lab.
  * The username and score code you will enter in OpenEdx to verify your score.
  * Your score and time on each trial.

.. image:: /assets/img/simulation/AutograderSummary.*
  :width: 100%
  :align: center

7. If you are using the OpenEdx course, **directly copy** the username and score code into OpenEdx. *Beware that the Score Code is usually longer than the textbox, so you should use Ctrl+A to make sure you select the entire code*.

.. image:: /assets/img/simulation/AutograderOpenEdx.*
  :width: 100%
  :align: center
