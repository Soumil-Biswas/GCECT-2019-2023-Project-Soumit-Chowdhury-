%% reads file into matlab This reads an array of audio samples into y,
%%%assuming the file is in the current folder
[y,Fs] = audioread('Rod KGECT.wav');
y1 = y(:,1); %change channel from stereo to mono
window=hamming(512); %%window with size of 512 points
noverlap=256; %%the number of points for repeating the window
nfft=1024; %%size of the fit
[S,F,T,P] = spectrogram(y1,window,noverlap,nfft,Fs,'yaxis');
%[S,F,T,P] = spectrogram(Audio_File,512,256,1024,Audio_Frequency,'yaxis');
surf(T,F,10*log10(P),'edgecolor','none'); axis tight;view(0,90);
colormap(hot); %%for the indexed colors, check this in help for blck/white
set(gca,'clim',[-80 -30]); %%clim is the limits of the axis colours
xlabel('Time s');
ylabel('Frequency kHz')