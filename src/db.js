import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  getDoc,
  doc,
  updateDoc,
  and,
} from "firebase/firestore";
import { firestore } from "./firebase";

const article_ref = collection(firestore, "blog-articles");
const contact_ref = collection(firestore, "contact-messages");

async function listDocs(ref, query_selector = null) {
  let queryObj = query_selector ? query(ref, query_selector) : query(ref);

  let docs = [];
  const querySnapshot = await getDocs(queryObj);
  querySnapshot.forEach((doc) => {
    docs.push({ data: doc.data(), id: doc.id });
  });

  return docs;
}

export async function listAllBlogs() {
  return listDocs(article_ref);
}

export async function listPublishedBlogs() {
  return listDocs(article_ref, where("published", "==", true));
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
  let rn_date_str = today.toDateString();
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

export async function createContactMessage(name, email, website, message) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  let rn_date_str = today.toDateString();
  let rn_datetime_str = today.toISOString();
  await setDoc(
    doc(
      contact_ref,
      name.replaceAll(" ", "-").toLowerCase() +
        "-" +
        rn_datetime_str.replaceAll(":", "-")
    ),
    {
      name,
      email,
      website,
      message,
      write_date: rn_date_str,
    }
  );
}

export async function listContactMessages() {
  return listDocs(contact_ref);
}
