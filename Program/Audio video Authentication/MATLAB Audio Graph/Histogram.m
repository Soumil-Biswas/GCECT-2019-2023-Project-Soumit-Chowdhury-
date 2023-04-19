%% reads file into matlab This reads an array of audio samples into y,
%%%assuming the file is in the current folder
[y,Fs] = audioread('Rod KGECT.wav');

y = y(:,1); %change channel from stereo to mono

h = histogram(y); %%basic histogram

xlabel('time(s)');
ylabel('Amp');
