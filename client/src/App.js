import './App.css';
import { useEffect } from 'react';
import axios from 'axios';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";

import { RTC } from './pages/RTCtest/rtc';
import { Test } from './pages/test/test';
import { Hello } from './pages/py_on_node.js/hello'

export default function App() {
  return(
    <Hello></Hello>
  )
}

