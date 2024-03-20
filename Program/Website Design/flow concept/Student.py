import hashmaker9000


# STAGE 1: Transaction verification (Student's end)
tID = input("Enter Transaction ID:")
tAmt = input("Enter Transaction AMount:")
'''
Check for Transaction ID and Transaction Amount match in Scholarship Office's Database.
Retrieve Student's report Card from University Server.
'''
h_primeD = hashmaker9000.hash_creator(tID, tAmt, "13")

h7 = 34667 * h_primeD
h8 = 26489 * h_primeD

'''
If h7 and h8 on Client side matches h7 and h8 on server side,
Retrieve Candidate's Scholarship invoice from Report Card.
'''