import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';

export default class WriteStory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }

  submitStory = () => {
    db.collection('stories').add({
      title: this.state.title,
      author: this.state.author,
      storyText: this.state.storyText,
    });
    this.setState({
      title: '',
      author: '',
      storyText: '',
    });
    alert('Story saved on the cloud.!');
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Bed Time Stories</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.titleBox}
          placeholder="Title of the story"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          value={this.state.title}
        />

        <TextInput
          style={styles.authorBox}
          placeholder="Author of the story"
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
          value={this.state.author}
        />

        <TextInput
          placeholder="WRITE STORY"
          onChangeText={(text) => {
            this.setState({
              storyText: text,
            });
          }}
          value={this.state.storyText}
          style={styles.storyText}
          multiline={true}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  header: {
    backgroundColor: 'cyan',
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    borderRadius: 10,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    borderRadius: 10,
  },
  storyText: {
    width: '90%',
    height: 250,
    backgroundColor: 'white',
    fontFamily: 'Eras Bold ITC',
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: 'pink',
    width: '50%',
    height: 40,
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
  },
});
