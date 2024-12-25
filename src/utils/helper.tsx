import axios from 'axios';
import { load } from 'cheerio';

export const getMediumCoverImage = async (url: string): Promise<string | null> => {
  try {
    // Fetch the Medium blog post HTML
    const { data } = await axios.get(url);

    // Load the HTML using cheerio
    const $ = load(data);

    // Extract the Open Graph image metadata
    const imageUrl = $('meta[property="og:image"]').attr('content');

    return imageUrl || null; // Return the image URL or null if not found
  } catch (error) {
    console.error('Error fetching Medium blog metadata:', error);
    return null;
  }
};
