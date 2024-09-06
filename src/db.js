import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "./firebase";

const article_ref = collection(firestore, "blog-articles");

export async function listAllBlogs() {
  let blogs = [];
  const querySnapshot = await getDocs(article_ref);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // TODO: MAKE DRY CODE BUDDY
    blogs.push({ data: doc.data(), id: doc.id });
  });
  return blogs;
}

export async function listProjects() {
  let projects = [];
  let query_obj = query(article_ref, where("type", "==", "project"));
  const querySnapshot = await getDocs(query_obj);
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    // TODO: MAKE DRY CODE BUDDY
    projects.push({ data: doc.data(), id: doc.id });
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
  let rn_date_str = today.toLocaleDateString();
  await setDoc(
    doc(
      article_ref,
      title.replaceAll(" ", "-").toLowerCase() +
        "-" +
        rn_date_str.replaceAll("/", "-")
    ),
    {
      title,
      short_desc,
      html_body,
      markdown_body,
      type,
      tags,
      write_date: rn_date_str,
    }
  );
}

export async function getArticle(article_id) {
  const docRef = doc(article_ref, article_id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { data: docSnap.data(), id: docSnap.id };
  } else {
    // docSnap.data() will be undefined in this case
    return false;
  }
}

export async function editArticle(
  article_id,
  title,
  short_desc,
  html_body,
  type,
  markdown_body,
  tags
) {
  // Set the "capital" field of the city 'DC'
  console.log(markdown_body);
  await updateDoc(doc(article_ref, article_id), {
    title,
    short_desc,
    html_body,
    markdown_body,
    type,
    tags,
  });
}
