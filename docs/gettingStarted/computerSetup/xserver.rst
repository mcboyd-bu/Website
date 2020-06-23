.. _xserver:

Windows Only: X Server
======================

If you are using Ubuntu on Windows (see :ref:`bash`), you need to install an X Server in order to see images displayed by bash.  In this section, we will install the Xming X Server.  **Skip this section if you are using Mac or Linux**.

1. `Download Xming <https://sourceforge.net/projects/xming/>`_ using the provided link.

.. image:: /assets/img/computerSetup/XServer1.*
  :width: 100%
  :align: center

2. Launch the Xming installer once it finishes downloading.  This will open a new window as shown below.  Use the default settings until you reach the "Select Components" page.

.. image:: /assets/img/computerSetup/XServer2.*
  :width: 100%
  :align: center

3. On the "Select Components" page, select "Don't install an SSH client".  Make sure that the box for "XLaunch wizard - frontend for Xming" is checked.

.. image:: /assets/img/computerSetup/XServer3.*
  :width: 100%
  :align: center

Use the default settings for the remaining pages and begin installation.

4. When the installation finishes, you will see that two programs were installed - XLaunch and Xming.  We will use XLaunch to launch the X Server frequently, so you may wish to pin it to your start menu.

.. image:: /assets/img/computerSetup/XServer4.*
  :width: 100%
  :align: center

5. Run XLaunch (**not Xming**).  The first time you run it, it may be stopped by your firewall.  You will need to allow access.

.. image:: /assets/img/computerSetup/XServer5.*
  :width: 100%
  :align: center

6. Once XLaunch successfully opens, you should see the following window.  You can close it for now (we will discuss how to use it later).

.. image:: /assets/img/computerSetup/XServer6.*
  :width: 100%
  :align: center
