import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
} from "firebase/firestore";
import { firestore } from "./firebase";

const articleRef = collection(firestore, "blog-articles");

export async function listAllBlogs() {
  let blogs = [];
  const querySnapshot = await getDocs(articleRef);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    blogs.push(doc.data());
  });
  return blogs;
}

export async function listProjects() {
  let projects = [];
  let query_obj = query(articleRef, where("type", "==", "project"));
  const querySnapshot = await getDocs(query_obj);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    projects.push(doc.data());
  });
  return projects;
}

export async function createArticle(
  title,
  short_desc,
  html_body,
  type,
  markdown_body,
  tags
) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  await setDoc(doc(articleRef, self.crypto.randomUUID()), {
    title,
    short_desc,
    html_body,
    markdown_body,
    type,
    tags,
    write_date: today.toLocaleDateString(),
  });
}
