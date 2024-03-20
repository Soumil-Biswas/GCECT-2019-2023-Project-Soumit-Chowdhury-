import hashmaker9000

# University side Information Embedding


# STAGE 0: Embed data
'''
Enter Student Data in Database.
Lock University Signature behind hash h1 and h2.
Lock Student's fingerprint data behind hash h3 and h4.
Lock Student's voice dat behind hash h5 and h6.
'''

# STAGE 1: University signature
"When roll no. and university name is entered by client side:"
'''
Take database values (roll no. and uni_name)
Send OTP to student's phone.

If OTP matches, private share of the Student Report Card is opened in the background.
The Server can now perform further checks on the 4 segments for student verification.

Use the otp, roll no. and uni_name to create hash values h1 and h2.
'''
roll_no = "Retrieve Candidate's Roll No. from database."
uni_name = "Retrieve roll no. from database."
otp = "Send OTP to client and store the value in this variable."

h_primeA = hashmaker9000.hash_creator(roll_no, uni_name, otp)

h1 = 31079 * h_primeA
h2 = 17891 * h_primeA

# STAGE 2: Biometric verification - STAGE 1 (fingerprint)



# STAGE 3: Biometric verification - STAGE 2 (voice)

# STAGE 4: Save Edits
