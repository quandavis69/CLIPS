export interface GoogleReview {
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface GooglePlaceReviews {
  reviews: GoogleReview[];
  rating: number | null;
  userRatingCount: number | null;
  mapsUri: string | null;
}

interface PlacesApiReview {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
}

interface PlacesApiResponse {
  reviews?: PlacesApiReview[];
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
}

// Fetches live Google reviews for the business via the Places API (New).
// Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID to be set - see .env.example.
// Google only returns up to 5 reviews per place, chosen by their relevance algorithm.
export async function getGooglePlaceReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount,googleMapsUri",
      },
      // Google's terms allow caching place data; refresh daily to stay current
      // without burning API quota on every page load.
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      return null;
    }

    const data: PlacesApiResponse = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? []).map((review) => ({
      authorName: review.authorAttribution?.displayName ?? "Google User",
      authorPhotoUrl: review.authorAttribution?.photoUri,
      rating: review.rating ?? 5,
      text: review.text?.text ?? review.originalText?.text ?? "",
      relativeTime: review.relativePublishTimeDescription ?? "",
    }));

    return {
      reviews,
      rating: data.rating ?? null,
      userRatingCount: data.userRatingCount ?? null,
      mapsUri: data.googleMapsUri ?? null,
    };
  } catch {
    return null;
  }
}
