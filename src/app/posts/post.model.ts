// Defines how object looks like but can't be instantiated
// We can create our own type to force and object to look like this
// even though we can't actually use an interface to create an object

//export allows the interface to be used outside of this file

export interface Post {
  id: string;
  title: string;
  content: string;
}
