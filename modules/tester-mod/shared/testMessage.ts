// Declares this class can be sent between an addon and a live script.
@Message
export class testMessage {
  // Without a decorator, this field will be ignored during transmission.
  transient: uint32 = 80;

  // Declares this field is a primitive that should be serialized
  @MsgPrimitive 
  field: uint32 = 25;
  
  // Declares this field is a primitive array with at most 3 entries
  @MsgPrimitiveArray(3) 
  array: TSArray<uint32> = [1,2,3] // This is valid, but the fourth entry will be ignored when this message is serialized.
  
  // Declares this field is a string with at most 5 characters
  @MsgString(5) 
  str: string = "abcdefg" // Also valid, but only 5 characters will be transmitted.
  
  // Declares this field is a string array of at most 2 entries with at most 3 characters each.
  @MsgStringArray(2,3)
  stringArr: TSArray<string> = ["abcd","aaa"]
}

@Message
export class WrapperMessage {
  // Messages can contain other message classes
  @MsgClass
  inner: testMessage = new testMessage(); // Inner message classes should always be initialized.
  
  // Declares this field is an array of at most 2 inner classes
  @MsgClassArray(2)
  innerArray: TSArray<testMessage> = [new testMessage(), new testMessage()];
}