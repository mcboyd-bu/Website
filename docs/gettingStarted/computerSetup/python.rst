.. _python:

Python and Libraries
====================

The RACECAR-MN is programmed with the Python programming language, so we will need to install the newest version of Python, along with a few Python libraries.

In short, you will need to run the following commands on the terminal: ::

  sudo apt update
  sudo apt install python3.8
  sudo apt install python3-pip
  pip3 install numpy
  pip3 install opencv-python
  pip3 install mypy
  pip3 install nptyping
  pip3 install jupyter
  pip install ipywidgets
  jupyter nbextension enable --py widgetsnbextension

Installing Python
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


Installing Libraries
""""""""""""""""""""

Libraries are pieces of code written by other people which we can use in our programs.  For example, the NumPy library allows us to efficiently handle large arrays, and we will use to store and process the images captured by the car.

To install a library, type the command ``pip3 install <libraryname>`` on the terminal. You will need to install the following Python libraries:

* `NumPy <https://numpy.org/>`_ helps us process large arrays and matrices.  Install it by entering ``pip3 install numpy`` on the terminal.
* `OpenCV <https://opencv.org/>`_ helps us process images.  Install it by entering ``pip3 install opencv-python`` on the terminal.
* `MyPy <http://mypy-lang.org/>`_ is a static type checker which can help identify mistakes before we run our program.  Install it by entering ``pip3 install mypy`` on the terminal.
* `Nptyping <https://pypi.org/project/nptyping/>`_ extends python type hints to support Numpy types.  Install it by entering ``pip3 install nptyping`` on the terminal.

.. image:: /assets/img/computerSetup/Python4.*
  :width: 100%
  :align: center

Installing Jupyter
""""""""""""""""""

`Jupyter Notebook <https://jupyter.org/index.html>`_ is a web application which can incrementally run pieces of code.  It is ideally suited for exploration and collaboration and is heavily used in data science and CS education.  We will be using Jupyter Notebooks in the exploration portions of several labs to learn how to process the different data sources on the car.

1. Install Jupyter by entering ``pip3 install jupyter`` on the terminal.

2. Next, we need to install the ``ipywidgets`` extension, which is necessary to use the widgets in several of our notebooks.  Enter ``pip3 install ipywidgets``.

3. Finally, we need to enable the widget extension.  Enter ``jupyter nbextension enable --py widgetsnbextension``.  If you see a message that ends with ``- Validating: OK``, the widget extension was successfully enabled.

.. image:: /assets/img/computerSetup/Jupyter1.*
  :width: 100%
  :align: center
