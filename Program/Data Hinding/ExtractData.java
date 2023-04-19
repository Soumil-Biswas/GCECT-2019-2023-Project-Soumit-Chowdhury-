import java.io.File;

public class ExtractData{
    static int matrixInterval = 1;
    static int secretImgSize = 56;
    static int startingFragIndex=2;    
    public static void main(String[] args) {
    File stegoCover = new File("client-assets/stego-output/cover.png");
    int size = ExtractData.secretImgSize;
   
           String extractionPath = "server-assets/extracted-fPrints";
           // // extracting the fingerprint from the stego image file using transform domain
           // // steganography
           TDS.extractSecretImage(stegoCover, size, extractionPath);
    }
}