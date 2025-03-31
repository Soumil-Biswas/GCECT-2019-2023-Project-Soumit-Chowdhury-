import java.io.File;

public class EmbedData{
    static int matrixInterval = 1;
    static int secretImgSize = 56;
    static int startingFragIndex=2;
    static String embedType = "thumb";
    public static void main(String[] args) {
        File coverOutImg = new File(args[0]);
        File tPrint = new File(args[1]);
        File stegoCover = new File(args[2], "stego-cover.png");

        System.out.println("## HIDING SECRET IMAGE IN CHEQUE COVER IMAGE...");
        // hiding the fingerprint file as a secret inside the cover image file using
        // transform domain steganography
        TDS.hideSecretImage(coverOutImg, tPrint, stegoCover);
    }
}