.. _bash:

Windows Only: Ubuntu on Windows
===============================

Every operating system has a terminal (sometimes referred to as a shell or console), which is a text-based program used to run low-level commands.  The terminals on Mac (``Terminal``) and Linux (``bash``, ``zsh``, etc.) are compatible with the RACECAR-MN, but the terminals on Windows (``cmd`` or ``PowerShell``) unfortunately are not.

In order to program the RACECAR-MN on a Windows machine, you will need to install Ubuntu on Windows.  This will allow us to use bash, a Linux terminal program.

============
Installation
============

1. Before you install Ubuntu, you will need to enable Windows Subsystem for Linux (WSL).  Open Control Panel and type "Windows Features" in the search bar.  Select ``Turn Windows features on or off``.

.. image:: /assets/img/computerSetup/WSL1.*
  :width: 100%
  :align: center

2. This will bring up a new window titled "Windows Features".  Scroll to the very bottom of the list and check the box next to ``Windows Subsystem for Linux``.  Select ``OK`` to save your changes.

.. image:: /assets/img/computerSetup/WSL2.*
  :width: 100%
  :align: center

3. Restart your computer to install these changes.

4. Install `Ubuntu from the Windows Store <https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6?activetab=pivot:overviewtab>`_.

.. image:: /assets/img/computerSetup/Ubuntu1.*
  :width: 100%
  :align: center

4. Launch Ubuntu from the start menu, which will open a bash terminal.  The first time you open bash, it will need to install.

.. image:: /assets/img/computerSetup/Ubuntu2.*
  :width: 100%
  :align: center

5. Finally, you will be asked to create a username and password.  This will be the password that you use whenever bash asks you for your ``sudo`` password.  **NOTE 1:** The username should be all lower case letters ONLY (i.e., no capital letters, no spaces, no numbers, and no special chacters).  **NOTE 2:** Nothing will display when you are typing the password, not even little asterisks, so type carefully and hit enter when you are done entering it.  

.. image:: /assets/img/computerSetup/Ubuntu3.*
  :width: 100%
  :align: center

.. image:: /assets/img/computerSetup/Ubuntu4.*
  :width: 100%
  :align: center

You are now ready to use bash on Windows. Whenever you are asked to use a terminal program in the RACECAR-MN course, always use bash (by launching Ubuntu from the start menu).  **Never use PowerShell or cmd for anything related to the racecar**.

================
Git Line Endings
================

Windows uses a different set of characters to denote the end of a line in a file than Mac or Linux. Specifically, Windows uses **CRLF** (``\r\n``), while Mac and Linux uses **LF** (``\n``) (You can read more `here <https://en.wikipedia.org/wiki/Newline>`_). Since we are using a Linux terminal and Linux on the physical racecar, we must use **LF** for all racecar files.

Because we are on Windows, Git will try to automatically change all of our racecar files from **LF** to **CRLF**. To disable this, enter the following command in bash. ::

  git config --global core.autocrlf false

If you do not see any output, this means that the command succeeded.

.. image:: /assets/img/computerSetup/GitLineEndings.*
  :width: 100%
  :align: center

===============
Troubleshooting
===============

I forgot my Ubuntu password
"""""""""""""""""""""""""""

`This article <https://winaero.com/blog/reset-password-wsl-linux-distro-windows-10/>`_ explains how to reset your Ubuntu password.
