This program Embeds a 56x56 pixel secret image into a cover image of dynamic size using Transform Domain Steganography (TDS) and then decrypts the same from the cover image.

This File consists of five .java files: ConsoleOutput.java, EmbedData.java, ExtractData.java, ImgOperation.java and TDS.java. The Working and function of each file is explained below.

## Unzipping The folder and using the Program

To use the project, unzip the contents of the ZIP/RAR file and run EmbedData.java before running ExtractData.java (Before opening a Java Project make sure the Latest Java Development Kit (JDK) and a Java Runtime Environment (JRE) are installed and recognize this folder as a Java Project). The Extracted Output Can be found at /server-assets/extracted-fPrints.

## Files:

# EmbedData.java

        The Program takes in the following arguments:

            - Cover image from client-assets/cover-img/
            - Secret image from client-assets/secret-images/

        The Steganographed Image is stored in client-assets/stego-output/cover.png

        Each variable can be edited to take in any file as required. The secret image needs to be a 56x56 pixel Image.

        The program makes use of hideSecretImage class in TDS.java which in turn uses ImgOperation.java and ConsoleOutput.java

# ExtractData.java

        The Program takes client-assets/stego-output/cover.png as input and the Extracted Images are stored in server-assets/extracted-fPrints.

        The program makes use of extractSecretImage class in TDS.java which in turn uses ImgOperation.java and ConsoleOutput.java

# ConsoleOutput.java

        The ConsoleOutput class contains methods for printing formatted output to the console.

# ImgOperation.java

        The ImgOperationClass turns the pixels of a bufferedImage into a 4D Array for modification

# TDS.java
        This file contains methods for hiding and extracting secret images inside cover images using transform domain steganography.
        The file contains the following methods:
        * hideSecretImage(): This method hides the secret image inside the cover image using the DWT (Discrete Wavelet Transform) technique.
        * extractSecretImage(): This method extracts the secret image from the cover image using the DWT technique.

