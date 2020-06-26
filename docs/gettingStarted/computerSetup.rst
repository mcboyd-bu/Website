.. _computer_setup:

Setting up your Local Computer
============================================

This page will walk you through the steps needed to prepare your personal computer to program your RACECAR-MN.  Your computer can use Windows, Mac, or Linux.

.. toctree::
   :maxdepth: 1
   :caption: Software Installation:

   computerSetup/visualStudioCode
   computerSetup/bash
   computerSetup/python
   computerSetup/xserver

================
GitHub Classroom
================

The RACECAR-MN libraries and labs are organized in a Git repository distributed through GitHub Classroom.  A Git **repository** is a special type of directory which stores files and tracks changes to those files.  This allows us to easily restore previous versions and synchronize changes across multiple places.  If multiple people clone a repository onto their computer, they can use Git to ensure that the repository stays up to date with changes made by all users.  You can learn more about Git `here <https://guides.github.com/introduction/git-handbook/>`_.

In this step, you will create or join a team on GitHub Classroom and create your own racecar repository.

1. Click on the following GitHub classroom `assignment link <https://classroom.github.com/g/cZpwtnuC>`_.  You will be asked to sign in to GitHub.  If you do not have an account, you can create one by following the "Create an account" link.

.. image:: /assets/img/computerSetup/GitHub1.*
  :width: 100%
  :align: center

2. When prompted, authorize GitHub Classroom to access your GitHub account.

.. image:: /assets/img/computerSetup/GitHub2.*
  :width: 100%
  :align: center

3. Next, you will need to select your team.  If you are working individually or are the first person from your team, you can create a new team with the dialog at the bottom of the screen.  Otherwise, you can join an existing team.  **Ask your instructor how you should complete this step**.

.. image:: /assets/img/computerSetup/GitHub3.*
  :width: 100%
  :align: center

.. warning::
   This is your only opportunity to select your team, so please double check that you have selected the correct team.  Carefully follow any instructions from your instructor to ensure that you complete this step correctly.

4. Once you have successfully created or joined a team, follow the link to your team's GitHub repository.

.. image:: /assets/img/computerSetup/GitHub4.*
  :width: 100%
  :align: center

.. image:: /assets/img/computerSetup/GitHub5.*
  :width: 100%
  :align: center

We recommend that you favorite/bookmark this page for easy access.  The next section will show you how to clone this repository onto your computer.

====================
Racecar Installation
====================

You are now ready to clone your racecar repository and install the racecar command line tool by following the instructions on `This webpage <https://mitll-racecar-mn.readthedocs.io/en/latest/tool_setup.html>`_.

Webpage Inputs
--------------

To begin, the webpage will  ask you to provide the following information:

1. **GitHub repository**: This is the clone link for the repository you created/joined in the GitHub Classroom step.  On your repository's home page, click the green ``Clone`` button, make sure it says "Clone with HTTPS", and copy the provided URL.  This URL should look something like ``https://github.com/MITLLRacecar/racecar-<team_name>.git``.

.. image:: /assets/img/computerSetup/GitHub6.*
  :width: 100%
  :align: center

2. **Absolute path**: This is the directory on your computer into which you will download the racecar repository.  On Mac or Linux, you can navigate to the directory and type the ``pwd`` command to show the absolute path.

On Windows, navigate to the directory in File Explorer.  Right click in an empty area and select ``Properties``.  The "Location" shown in the properties window is the absolute path up to this directory, so you will need to add the name of the current directory to the end.  For the example shown in the picture below, the location is ``C:\Users\matth\Documents`` and the name of the directory is ``Racecar``, so the absolute path is ``C:\Users\matth\Documents\Racecar``.

.. image:: /assets/img/computerSetup/AbsolutePath.*
  :width: 100%
  :align: center

3. **IP Address**: This is the static IP address of your racecar assigned by the Wi-Fi router.  Ask your instructor for this information.  If you do not know your IP address, you can put a placeholder for now (such as ``0.0.0.0``) and fill it in later.

4. **Operating System**: Select the operating system of your computer, either Windows, Mac, or Linux.

Troubleshooting
---------------

If you are using Windows, remember to use bash, as described in :ref:`bash`.  **You cannot use Command Prompt (cmd) or PowerShell**.

General Suggestions
"""""""""""""""""""

1. If you run into issues, try closing all open terminals and opening a brand new terminal.
2. If this does not work, try restarting your computer.

Step 3 (Clone repository)
"""""""""""""""""""""""""

In you are **using Windows**, and after the ``git clone`` command you see an error of the form ``error: chmod on <some directory path> failed: Operation not permitted``, try the following steps.

1. Restart your computer.
2. Open a terminal and enter the following commands ::

    sudo umount /mnt/c
    sudo mount -t drvfs C: /mnt/c -o metadata

3. Repeat step 3 from the webpage.

For more details, see `this post <https://askubuntu.com/questions/1115564/wsl-ubuntu-distro-how-to-solve-operation-not-permitted-on-cloning-repository>`_ On StackExchange.

Step 4 (Setup racecar tool)
"""""""""""""""""""""""""""

At the end of this step when you run ``racecar test``, if you receive the error ``racecar: command not found``, then the racecar tool was not successfully installed.

The first command provided in Step 4 (the 4 or 5 line block beginning with "echo") creates a ``.config`` file in your racecar repository.  Open the ``racecar-[team-name]`` directory (the one you created in Step 3) in Visual Studio Code.  In the ``scripts`` folder, you should see a file called ``.config``. If not, the first command did not succeed.  Open a brand new terminal, enter the command again, and see if the ``.config`` file appears.  If not, ask an instructor for help.

The remaining commands add code in your ``.bashrc`` to source this ``.config`` file and the ``.bash_racecar`` script in the same directory.  To see if they have been added to your ``.bashrc``, run ``cat ~/.bashrc`` if you are using bash or ``cat ~/.zshrc`` if you are using Zsh.  The output should be long, and end with something like this:

.. image:: /assets/img/computerSetup/Bashrc.*
  :width: 100%
  :align: center

Specifically, you should see two ``if`` statements to source ``.config`` and ``.bash_racecar`` respectively, with each line ending with the tag ``# RACECAR_ALIASES``.  Here are some things to check for:

* Check that the paths to ``.config`` and ``.bash_racecar`` are correct.  If not, ask an instructor to help you fix them manually with a command line editor such as ``vim`` or ``nano``.

* Check that there are only two if statements with the ``# RACECAR_ALIASES`` tags (one for ``.config`` and one for ``.bash_racecar``).  If there are more than two if statements with this tag, an older version may have not been removed properly.  With the help of an instructor, use ``vim`` or ``nano`` to remove the outdated if statements.

* If you see no such if statements, then the Step 4 command did not properly modify your ``.bashrc``.  Try running the relevant portions of the command again, or ask an instructor for help.

* If the command ``cat ~/.bashrc`` returns the error ``cat: home/<username>/.bashrc: No such file or directory``, then you do not have a ``.bashrc`` file in your home directory.  With the help of an instructor, locate your ``.bashrc`` file (it may have another name, such as ``.bash_profile``), and add the two if statements to source ``.config`` and ``.bash_racecar``. 
