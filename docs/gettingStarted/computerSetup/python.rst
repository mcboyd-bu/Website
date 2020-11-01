.. _python:

Python and Libraries
====================

The RACECAR-MN is programmed with the Python programming language, so we will need to install the newest version of Python along with a few Python libraries.

In short, you will need to run the following commands on the terminal.

Windows and Linux: ::

  sudo apt update
  sudo apt install python3.8
  sudo apt install python3-pip

  pip3 install --upgrade pip
  pip3 install numpy
  pip3 install matplotlib
  pip3 install mypy
  pip3 install nptyping
  pip3 install opencv-contrib-python

  pip3 install jupyter
  pip3 install ipywidgets
  jupyter nbextension enable --py widgetsnbextension

Mac: ::

  xcode-select --install
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  brew install python3

  pip3 install --upgrade pip
  pip3 install numpy
  pip3 install matplotlib
  pip3 install mypy
  pip3 install nptyping
  pip3 install opencv-contrib-python

  pip3 install jupyter
  pip3 install ipywidgets
  jupyter nbextension enable --py widgetsnbextension

Installing Python 3
-------------------

To check if Python 3 is already installed, run ``python3 --version``.  If it returns ``Python 3.x.x``, (such as ``Python 3.8.3``), then Python 3 is already installed and you can skip to the **Installing Libraries** section.

.. image:: /assets/img/computerSetup/PythonVersion.*
  :width: 100%
  :align: center

If not, follow the steps below to install Python 3 on your computer.

Windows and Linux
"""""""""""""""""

1. We will install Python with APT (Advanced Package Tool), so we first need to make sure that APT is up to date.  Open a terminal and run ``sudo apt update``.  Remember that **if you are using Windows, you must use a bash terminal** (see :ref:`bash`), not cmd or PowerShell.

.. image:: /assets/img/computerSetup/Python1.*
  :width: 100%
  :align: center

2. To install Python, run the command ``sudo apt install python3.8``.  When you are asked "Do you want to continue?", enter ``Y`` for yes.

.. image:: /assets/img/computerSetup/Python2.*
  :width: 100%
  :align: center

3. Finally, we need to install pip, the Python package management system, which will allow us to install libraries such as NumPy and OpenCV.  Run the command ``sudo apt install python3-pip``.

.. image:: /assets/img/computerSetup/Python3.*
  :width: 100%
  :align: center


Mac
"""

Unfortunately, Mac does not have APT, so we will need to install and use `homebrew` instead.

1. Install XCode by running ``xcode-select --install`` on the terminal.

2. Install Homebrew by running ``ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`` on the terminal.

3. Install Python 3 by running ``brew install python3``.

You can find more details `here <https://installpython3.com/mac/>`_.


Installing Libraries
""""""""""""""""""""

Libraries are pieces of code written by other people which we can use in our programs.  For example, the NumPy library allows us to efficiently handle large arrays, and we will use to store and process the images captured by the car.

Before using pip, you should always update it to the newest version by entering ``pip3 install --upgrade pip`` on the terminal.

To install a library, type the command ``pip3 install <libraryname>`` on the terminal. You will need to install the following Python libraries:

* `NumPy <https://numpy.org/>`_ helps us process large arrays and matrices.  Install it by entering ``pip3 install numpy`` on the terminal.
* `Matplotlib <https://matplotlib.org/>`_ helps us display images and data.  Install it by entering ``pip3 install matplotlib`` on the terminal.
* `MyPy <http://mypy-lang.org/>`_ is a static type checker which can help identify mistakes before we run our program.  Install it by entering ``pip3 install mypy`` on the terminal.
* `Nptyping <https://pypi.org/project/nptyping/>`_ extends python type hints to support Numpy types.  Install it by entering ``pip3 install nptyping`` on the terminal.
* `OpenCV <https://opencv.org/>`_ helps us process images. Install it by entering ``pip3 install opencv-contrib-python`` on the terminal.

.. image:: /assets/img/computerSetup/Python4.*
  :width: 100%
  :align: center

You can view all of the installed libraries by entering ``pip3 list`` on the terminal. If you need to uninstall a library, enter ``pip3 uninstall package-name``, such as `pip3 uninstall numpy``.

Installing Jupyter
""""""""""""""""""

`Jupyter Notebook <https://jupyter.org/index.html>`_ is a web application which can incrementally run pieces of code.  It is ideally suited for exploration and collaboration and is heavily used in data science and CS education.  We will be using Jupyter Notebooks in the exploration portions of several labs to learn how to process the different data sources on the car.

1. Install Jupyter by entering ``pip3 install jupyter`` on the terminal.

2. Next, we need to install the ``ipywidgets`` extension, which is necessary to use the widgets in several of our notebooks.  Enter ``pip3 install ipywidgets``.

3. Finally, we need to enable the widget extension.  Enter ``jupyter nbextension enable --py widgetsnbextension``.  If you see a message that ends with ``- Validating: OK``, the widget extension was successfully enabled.

.. image:: /assets/img/computerSetup/Jupyter1.*
  :width: 100%
  :align: center
