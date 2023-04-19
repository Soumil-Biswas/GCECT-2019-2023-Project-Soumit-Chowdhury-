# MATLAB-SIFT-Fingerprint-Authentication
A GUI Program to:
    - Take a Grayscale Fingerprint Image as Input.
    - Detect and extract fingerprint minutiae features into a .dat file format.
    - Compare two .dat files and give a %precentage match result as output.

A program based on a version provided for by Prof. Soumit Choudhury and used in Mr. Arkadip Ray's Project.

## Unzipping The folder

- To use the project, unzip the contents of the ZIP/RAR file, navigate to the Programs folder and run start_gui_single_mode.m using MATLAB (This project was modified using MATLAB Version R2021a). Once the GUI opens, follow the instructions as given in User Manual.doc.

## Using the Program

# Extracting Mintuniae

    - Open start_gui_single_mode.m using MATLAB.
    - Click on Load Image Button, choose the required image using the pop-up window.
    - Click on the Hist-Equalization button, enter the value k required for the process. EXperimentally derived optimum results are achieved    using 0.45.
    - Click on the FFT Button.
    - Click on the Binarization Button.
    - Click on the Direction Mapping Button.
    - Click on the ROI Area Button.
    - Click on the Thinning Button.
    - Click on the Remove H breaks Button.
    - Click on the Remove Spike Button.
    - Click on the Extract Minutia Button.
    - Click on the Real Minutiae Button.
    - Click on the Save File Button. Save the file in a .dat file format.

# Matching Fingerprints

    * Click on the Match Button. Select the 2 files to be matched and wait for the result to be generated.



