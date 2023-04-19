import java.io.File;

public class EmbedData{
    static int matrixInterval = 1;
    static int secretImgSize = 56;
    static int startingFragIndex=2;
    static String embedType = "thumb";
    public static void main(String[] args) {
        File coverOutImg = new File("client-assets/cover-img/cover.png");
        File tPrint = new File("client-assets/secret-images/logo-56x56.png");
        File stegoCover = new File("client-assets/stego-output/cover.png");

        System.out.println("## HIDING SECRET IMAGE IN CHEQUE COVER IMAGE...");
        // hiding the fingerprint file as a secret inside the cover image file using
        // transform domain steganography
        TDS.hideSecretImage(coverOutImg, tPrint, stegoCover);
    }
}