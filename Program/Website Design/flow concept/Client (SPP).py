import hashmaker9000
# Client side Information retrieval


# STAGE 1: University signature
roll_no = str(input("Enter Candidate's Roll No.:"))
uni_name = str(input("Enter Name of the Candidate's School/University/Institution:"))
'''
Match roll_no and uni_name with University Database.
If matched, send otp to student's Phone.
Use the same otp to create hash values h1 and h2 on the server side.
'''
file = open("Report Card Sample.pdf", 'r')

otp = str(input("Enter One-Time-Password:"))

'''
If OTP matches, private share of the Student Report Card is opened in the background.
The Server can now perform further checks on the 4 segments for student verification.
'''

h_primeA = hashmaker9000.hash_creator(roll_no, uni_name, otp)

h1 = 31079 * h_primeA
h2 = 17891 * h_primeA
'''
If h1 and h2 on Client side matches h1 and h2 on server side,
Retrieve University Signature from Report Card.
'''

# STAGE 2: Biometric verification - STAGE 1 (fingerprint)
yop = input("Enter Candidate's Year of Passing:")
dgpa = input("Enter Candidate's DGPA:")
'''
Check for yop and dgpa match in Student Database.
Use the otp from before to create hash values h3 and h4 on the server side.
'''
h_primeB = hashmaker9000.hash_creator(yop, dgpa, otp)

h3 = 62743 * h_primeB
h4 = 77549 * h_primeB
'''
If h3 and h4 on Client side matches h3 and h4 on server side,
Retrieve Candidate's fingerprint from Report Card.
'''

# STAGE 3: Biometric verification - STAGE 2 (voice)
yop = input("Enter Candidate's Year of Passing:")
dgpa = input("Enter Candidate's DGPA:")
'''
Check for yop and dgpa match in Student Database.
Use the otp from before to create hash values h5 and h6 on the server side.
'''
h_primeC = hashmaker9000.hash_creator(yop, dgpa, otp)

h5 = 17989 * h_primeC
h6 = 17989 * h_primeC
'''
If h5 and h6 on Client side matches h5 and h6 on server side,
Retrieve Candidate's voice from Report Card.
'''

# STAGE 4: Transaction embedding
tID = input("Enter Transaction ID:")
tAmt = input("Enter Transaction AMount:")
'''
Embed the following info in the 4th segment of the Private Share of the Student's Report Card.
Send a message to the Student containing the Transaction ID and Transaction Amount.
'''
h_primeD = hashmaker9000.hash_creator(tID, tAmt, 1)

h7 = 34667 * h_primeD
h8 = 26489 * h_primeD
'''
Take fingerprint of Candidate's left hand.
Embed fingerprint of left hand in 4th segment of report card as well.
Use tID and tAmt to create hash values h7 and h8 on the server side.
'''

