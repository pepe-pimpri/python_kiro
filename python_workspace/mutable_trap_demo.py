def buggy_append(item, lst=[]):
    """
    Demonstrates the mutable default argument trap.
    The list `lst` is created once at definition time, not every time the function is called.
    """
    lst.append(item)
    return lst

def fixed_append(item, lst=None):
    """
    Fixes the trap using a None sentinel.
    A new list is created inside the function body if no list is provided.
    """
    if lst is None:
        lst = []
    lst.append(item)
    return lst

if __name__ == "__main__":
    print("--- Demonstrating the Bug ---")
    print("Call 1: buggy_append(1) ->", buggy_append(1))
    print("Call 2: buggy_append(2) ->", buggy_append(2))
    print("Call 3: buggy_append(3) ->", buggy_append(3))
    print("\nNotice how the list 'remembers' previous calls. This is usually NOT what you want.")

    print("\n--- Demonstrating the Fix ---")
    print("Call 1: fixed_append(1) ->", fixed_append(1))
    print("Call 2: fixed_append(2) ->", fixed_append(2))
    print("Call 3: fixed_append(3) ->", fixed_append(3))
    print("\nWith the None sentinel, each call starts with a fresh list if one isn't provided.")
