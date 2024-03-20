# Hash maker 9000

def hash_creator(dep1, dep2, dep3):
    dep1 = asciify(dep1)
    dep2 = asciify(dep2)
    dep3 = asciify(dep3)
    hash_prime = dep1 + dep2 + dep3
    return hash_prime


def asciify(inputstring):
    output = 0
    for character in inputstring:
        a = ord(character)
        output = output + a
    #print(output)
    return output


#n = hash_creator("GCECTB-R19-3030", "gcect", "123456")
#print("Hash prime is: {}" .format(n))
