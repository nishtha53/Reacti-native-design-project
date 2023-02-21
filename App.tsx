import React from "react";
import {
  SafeAreaView,
  ScrollView
} from "react-native";
import ActionCards from "./components/ActionCards";
import ContactList from "./components/ContactList";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import  FlatCart  from  './components/FlatCart';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
          <FlatCart />
          <ElevatedCards />
          <FancyCard />
          <ActionCards />
          <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;
