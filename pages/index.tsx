import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AddIssueForm from '../components/AddIssueForm'
import Header from '../components/Header'
import ShowFormBtn from '../components/ShowFormBtn'
import { GetServerSideProps } from 'next'
import IssueList from '../components/IssueList'

import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'

const Home = ({ context }: { context: [] }) => {
  const [issues, setIssues] = useState(context)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    getIssues();
  }, [issues])
  
  const getIssues = async () => {
    const res = await axios.get('https://fake-server-issue-tracker.herokuapp.com/tasks');
    const context = await res.data;
    context.sort((a: any, b: any) => {
      return a.status === b.status ? 0 : a.status ? -1 : 1;
    })
    context.sort((a: any, b: any) => {
      return a.complete === b.complete ? 0 : a.complete ? -1 : 1;
    })
    setIssues(context)
  }

  const handleShowForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <Head>
        <title>Issue Tracker App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <Header />
          <ShowFormBtn showForm={showForm} handleShowForm={handleShowForm} />
        </div>
        
        {showForm && (
          <div>
            <AddIssueForm setShowForm={setShowForm} />
          </div>
        )}

        {issues.length === 0 && (
          <p className={styles.noIssues}>Click <span>Add Issue</span> to start adding issues!</p>
        )}


        <IssueList issues={issues} />
      </main>
      <Footer />
    </div>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('https://fake-server-issue-tracker.herokuapp.com/tasks');
  const context = await res.data;

  if (!context) {
    return {
      notFound: true
    };
  }

  return {
    props: { context }
  }
}