import { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { useProfileMutation } from '../slices/usersApiSlice';
import { useCredentials } from '../slices/authSlice';

export const ProfileScreen = () => {
  return (
    <div>ProfileScreen</div>
  )
}
